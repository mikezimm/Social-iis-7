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

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export default class Youtube extends React.Component<IYoutubeProps, IYoutubeState> {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch(this.props.apiKey, '',  'channelId', this.props.channelId, this.props.maxResults.toString())
  }


  public componentDidUpdate(prevProps){
    /*
    */
      let rebuildYouTube = false;
      if ( prevProps.channelId !== this.props.channelId ) { rebuildYouTube = true }

      console.log('Youtube componentDidUpdate:', prevProps, this.props);

      if ( rebuildYouTube === true){
        this.videoSearch(this.props.apiKey, '',  'channelId', this.props.channelId, this.props.maxResults.toString());
      }
    }


  public render(): React.ReactElement<IYoutubeProps> {

    const videoSearch = _.debounce((term) => { this.videoSearch(this.props.apiKey, term, 'channelId', this.props.channelId, this.props.maxResults.toString()) }, 300);

    console.log('YouTube:', this.props, this.state);

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
    if (!key) {
      //throw new Error('Youtube Search expected key, received undefined');
      console.log('Youtube Search expected key, received undefined');
      return;
    }

    let params = {
      part: 'snippet',
      key: key,
      q: term,
      maxResults: maxResults,
      type: 'video',
      order: "date"
    };

    params[objectType] = objectId || null;

    axios.get(ROOT_URL, { params: params })
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
        console.log('YouTube Search Error:' );
        console.error(error);
      });
      console.log('YouTube Search Complete:' );   
  }
}
