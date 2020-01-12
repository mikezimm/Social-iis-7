import * as React from 'react';
import styles from './Youtube.module.scss';
import { IYoutubeProps } from './IYoutubeProps';
import { IYoutubeState } from './IYoutubeState';
import { escape } from '@microsoft/sp-lodash-subset';
import { SearchBar } from './SearchBar/SearchBar';
import { VideoDetail } from './VideoDetail/VideoDetail';
import { VideoList } from './VideoList/VideoList'
import * as _ from 'lodash';
import axios from 'axios';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/';


export default class Youtube extends React.Component<IYoutubeProps, IYoutubeState> {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    console.log('YouTube constructor:', this.props, this.state);
    this.videoSearch(this.props.apiKey, '',  this.props.objectType , this.props.objectId, this.props.maxResults.toString())
  }

  public componentDidUpdate(prevProps){
    /*
    */
      let rebuildYouTube = false;
      if ( prevProps.objectId !== this.props.objectId ) { rebuildYouTube = true }

      console.log('Youtube componentDidUpdate:', prevProps, this.props);

      if ( rebuildYouTube === true){
        this.videoSearch(this.props.apiKey, '',  this.props.objectType , this.props.objectId, this.props.maxResults.toString());
      }
    }


  public render(): React.ReactElement<IYoutubeProps> {

    const videoSearch = _.debounce((term) => { this.videoSearch(this.props.apiKey, term, this.props.objectType, this.props.objectId, this.props.maxResults.toString()) }, 300);

    return (
      <div className={styles.youtube}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-white ms-fontColor-black ${styles.row}`}>
            <p className="ms-font-l">{escape(this.props.description)}</p>
            <div>
              <SearchBar onSearchTermChange={videoSearch} />
              <br />
              <VideoDetail video={this.state.selectedVideo} />
              <VideoList
                onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private videoSearch(key: string, term: string, objectType: string, objectId: string, maxResults: string): any {

    
    if (objectType.toLowerCase().indexOf('playlist') > -1 ) { 
      objectType = 'playlistId';
      this.playListSearch(key, ROOT_URL + 'playlistItems', term, objectId, maxResults);

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
      objectType = 'search';https://console.cloud.google.com/iam-admin/quotas?project=socialiis-01112020
      this.playListSearch(key, ROOT_URL + 'search', term, objectId, maxResults);

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

        this.playListSearch(key, ROOT_URL + 'playlistItems', term, userPlayList, maxResults);

      })
      .catch((error) => {
        console.log('YouTube getVideosByChannel Search Error:' );
        console.error(error);
        console.error(error.detail);
      });

  }

  private playListSearch(key: string, Search_ROOT_URL : string, term: string, objectId: string, maxResults: string): any {
    if (!key) {
      //throw new Error('Youtube Search expected key, received undefined');
      console.log('Youtube Search expected key, received undefined');
      return;
    }

    let params = {
      part: 'snippet',
      playlistId: objectId || null,
      key: key,
      maxResults: maxResults,
      q: term,
      order: 'date',
      type: 'video',
    };

/*
    console.log('YouTube playListSearch: Search_ROOT_URL,: ', Search_ROOT_URL);
    console.log('YouTube playListSearch: props/state',  this.props, this.state);
    console.log('YouTube playListSearch: search params: ', params);
*/
    axios.get(Search_ROOT_URL, { params: params })
      .then((response) => {
        // if (callback) { callback(response.data.items); }
        // return response.data.items;

        console.log('YouTube Search response: items', response.data );
        let decodedItems = [];

        for (let item of response.data.items ) {
          item.snippet.title = item.snippet.title.replace(/&amp;/g, '&');
          item.snippet.description = item.snippet.title.replace(/&amp;/g, '&');
          decodedItems.push(item);

        }

        this.setState({
          videos: decodedItems,
          selectedVideo: decodedItems[0]
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
