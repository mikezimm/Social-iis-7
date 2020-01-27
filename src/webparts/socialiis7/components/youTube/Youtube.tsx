import * as React from 'react';
import styles from './Youtube.module.scss';
import { IYoutubeProps } from './IYoutubeProps';
import { IYoutubeState } from './IYoutubeState';
import { escape } from '@microsoft/sp-lodash-subset';
import { SearchBar } from './SearchBar/SearchBar';
import { VideoDetail } from './VideoDetail/VideoDetail';
import { VideoList } from './VideoList/VideoList';
import * as _ from 'lodash';
import axios from 'axios';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/';


export default class Youtube extends React.Component<IYoutubeProps, IYoutubeState> {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      activePlayList: this.props.objectType.indexOf('playlist') > -1 ? this.props.objectId : null,
    };
    //console.log('YouTube constructor:', this.props, this.state);
    this.videoSearch(this.props.apiKey, '',  this.props.objectType , this.props.objectId, this.props.maxResults.toString());
  }

  public componentDidUpdate(prevProps){
    /*
    */
      let rebuildYouTube = false;
      if ( prevProps.objectId !== this.props.objectId ) { rebuildYouTube = true; }

      //console.log('Youtube componentDidUpdate:', prevProps, this.props);
      if ( rebuildYouTube === true){
        
        this.state = {
          videos: [],
          selectedVideo: null,
          activePlayList: this.props.objectType.indexOf('playlist') > -1 ? this.props.objectId : null,
        };

        this.videoSearch(this.props.apiKey, '',  this.props.objectType , this.props.objectId, this.props.maxResults.toString());

        //This should only fire when the search is used.
        //this.playListSearch(this.props.apiKey, ROOT_URL + 'search', '',  this.props.objectType , this.props.objectId, this.props.maxResults.toString(),true);
      }
    }


  public render(): React.ReactElement<IYoutubeProps> {

    //Always force to search playlist items because this should only be visible when a play list is on the screen
    //const videoSearch = _.debounce((term) => { this.playListSearch(this.props.apiKey, ROOT_URL + 'playlistItems', term, 'playlist', this.state.activePlayList, this.props.maxResults.toString(), true) }, 300);
    let paneWidth = 700;
    let videoWidth = this.state.videos.length > 1 ? paneWidth * .55 : paneWidth;
    let listWidth = this.state.videos.length > 1 ? paneWidth - videoWidth : 0;

    return (
      <div className={styles.youtube}>
        <div className={styles.container}>
          {/* <div className={`ms-Grid-row ms-bgColor-white ms-fontColor-black ${styles.row}`}> */}
          <div className={`ms-Grid-row ms-bgColor-white ms-fontColor-black ${styles.row}`} style={{width: paneWidth}}>
            <p className="ms-font-l">{escape(this.props.description)}</p>
            <div>
              { /*  Search is not available on playlists... only channels */ }
              { /*<SearchBar onSearchTermChange={videoSearch} />*/ }
              <br />
              <VideoDetail video={this.state.selectedVideo} width={videoWidth}/>
              <VideoList
                onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                videos={this.state.videos}
                listWidth={listWidth} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private videoSearch(key: string, term: string, objectType: string, objectId: string, maxResults: string): any {

    
    if (objectType.toLowerCase().indexOf('playlist') > -1 ) { 
      objectType = 'playlistId';
      this.playListSearch(key, ROOT_URL + 'playlistItems', term, objectType, objectId, maxResults, false);

    }
    else if ( objectType.toLowerCase().indexOf('video' ) > -1 ) { 
      // per https://stackoverflow.com/a/27872244/4210807
      objectType = 'forUsername';
      this.playListSearch(key, ROOT_URL + 'videos', term, objectType, objectId, maxResults, false);

    }
    else if ( objectType.toLowerCase().indexOf('user' ) > -1 ) { 
      // per https://stackoverflow.com/a/27872244/4210807
      objectType = 'forUsername';
      this.getVideosByChannel(key, term, objectType, objectId, maxResults);

    }
    else if ( objectType.toLowerCase().indexOf('channel' ) > -1 ) { 
      // per https://stackoverflow.com/a/27872244/4210807
      objectType = 'id';
      this.getVideosByChannel(key, term, objectType, objectId, maxResults);

    }
    else { 
      objectType = 'search';  //https://console.cloud.google.com/iam-admin/quotas?project=socialiis-01112020
      this.playListSearch(key, ROOT_URL + 'search', term, objectType, objectId, maxResults, false);

      console.log('Youtube Search expected an objectType of channel or playlist but received ', objectType );
     }

  }

  private getVideosByChannel(key: string, term: string, objectType: string, objectId: string, maxResults: string): any {
    // per https://stackoverflow.com/a/27872244/4210807

    if (!key) {
      //throw new Error('Youtube Search expected key, received undefined');
      console.log('Youtube Search expected key, received undefined');
      return;
    }

    let params = {
      part: 'contentDetails',
      key: key,
      maxResults: 1,
    };

    params[objectType] = objectId;

    let Search_ROOT_URL = ROOT_URL + 'channels';
    /*
    console.log('YouTube getVideosByChannel: Search_ROOT_URL,: ', Search_ROOT_URL);
    console.log('YouTube getVideosByChannel: props/state',  this.props, this.state);
    console.log('YouTube getVideosByChannel: search params: ', params);
*/
    axios.get(Search_ROOT_URL, { params: params })
      .then((response) => {
        // if (callback) { callback(response.data.items); }
        // return response.data.items;

        //console.log('YouTube Search response: user:', response.data );
        let userPlayList = response.data.items[0].contentDetails.relatedPlaylists.uploads;

        this.playListSearch(key, ROOT_URL + 'playlistItems', term, 'playlist', userPlayList, maxResults, false);

      })
      .catch((error) => {
        console.log('YouTube getVideosByChannel Search Error:' );
        console.error(error);
        console.error(error.detail);
      });

  }

  private playListSearch(key: string, Search_ROOT_URL : string, term: string, objectType: string, objectId: string, maxResults: string , useSearchAPI: boolean): any {
    if (!key) {
      //throw new Error('Youtube Search expected key, received undefined');
      console.log('Youtube Search expected key, received undefined');
      return;
    }

    let params = {
      part: 'snippet',
      key: key,
      maxResults: maxResults,
      q: term,
      order: 'date',
      type: 'video',
    };

    let activePlayList = null;

    if ( Search_ROOT_URL.indexOf('search') > -1) {
      //This is a search and you need to look at the playlist to focus search.
      activePlayList = this.state.activePlayList;
      params['playlistId'] = activePlayList;

    } else if (objectType.toLowerCase().indexOf('video') > -1) {
      params['id'] = objectId || null;

    } else if (objectType.toLowerCase().indexOf('playlist') > -1) {
      params['playlistId'] = objectId || null;
      activePlayList = objectId;

    } else {
      params['id'] = objectId || null;
      console.log('unexpected objectType in playListSearch (expecting either video or playlist): ', objectType);
    }

/*
    console.log('YouTube playListSearch: Search_ROOT_URL,: ', Search_ROOT_URL);
    console.log('YouTube playListSearch: props/state',  this.props, this.state);
    console.log('YouTube playListSearch: search params: ', params);
*/
    //console.log('YouTube Search params:', params );

    axios.get(Search_ROOT_URL, { params: params })
      .then((response) => {
        // if (callback) { callback(response.data.items); }
        // return response.data.items;

        //console.log('YouTube Search response: items', response.data );
        let decodedItems = [];

        for (let item of response.data.items ) {
          item.snippet.title = item.snippet.title.replace(/&amp;/g, '&');
          item.snippet.description = item.snippet.title.replace(/&amp;/g, '&');
          decodedItems.push(item);

        }

        this.setState({
          videos: decodedItems,
          selectedVideo: decodedItems[0],
          activePlayList: activePlayList,
        });
      })
      .catch((error) => {
/**
 *      Error type  Error detail    Description
        forbidden (403) channelClosed       The channel specified in the channelId parameter has been closed.
        forbidden (403) channelSuspended    The channel specified in the channelId parameter has been suspended.
        forbidden (403) playlistForbidden   The playlist identified with the request's id parameter does not support the request or the request is not properly authorized.
        notFound (404) channelNotFound      The channel specified in the channelId parameter cannot be found.
        notFound (404) playlistNotFound     The playlist identified with the request's id parameter cannot be found.
 */

        console.log('YouTube Search Error:' );
        console.error(error);
        console.error(error.detail);
      });
  }
}
