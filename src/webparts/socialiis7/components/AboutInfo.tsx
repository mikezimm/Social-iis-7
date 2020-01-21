

import * as React from 'react';
import * as ReactDom from 'react-dom';

import {ISocialiis7State} from './ISocialiis7State';

import { ISocialiis7Props, IEntity } from './ISocialiis7Props';

import * as strings from 'Socialiis7WebPartStrings';

import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

import styles from './Socialiis7.module.scss';
import AboutMe from './AboutMe/AboutMe';
import FootPrint from './AboutMe/FootPrint';

import { CompoundButton, Stack, IStackTokens, elementContains } from 'office-ui-fabric-react';

import { Nav, INavLink } from 'office-ui-fabric-react/lib/Nav';

import Youtube from './youTube/Youtube';
import { IYoutubeProps } from './youTube/IYoutubeProps';

import FacebookPage from './Facebook/FacebookPage';
import { IFacebookPageProps } from './Facebook/IFacebookPageProps';

import TweetsFeedWebPart from './tweetsFeed/TweetsFeedWebPart';
import { ITweetsFeedWebPartProps } from './tweetsFeed/ITweetsFeedWebPartProps';

import Iframe from 'react-iframe';

export interface IAboutInfoProps {
  parentProps:ISocialiis7Props;
  parentState: ISocialiis7State;
  
}

export interface IAboutInfoState {
  selectedEntityTitle: string;
}

export default class AboutInfo extends React.Component<IAboutInfoProps, IAboutInfoState> {
  constructor(props: IAboutInfoProps) {
    super(props);
    this.state = { 
      selectedEntityTitle: this.props.parentState.selectedEntity.titleKey,
    };
  }

  public render(): React.ReactElement<IAboutInfoProps> {

    let selectedNavKey : string = this.props.parentState.selectedNavKey;
    let selectedNavItem : INavLink = this.props.parentState.selectedNavItem;
    let Entity : IEntity = this.props.parentState.selectedEntity;  
    if (!selectedNavItem ) { selectedNavItem = Entity.navigation[0];}
    const stackFormRowsTokens: IStackTokens = { childrenGap: 10 };
    console.log('Render AboutInfo parentState',this.props.parentState);

    //showDebug
    let showDebug = false;
    if ( selectedNavKey.indexOf('showDebug') > 0  ){
      showDebug = true;
    }

    let aboutPane = null;
    let youTube = false;

    let objectType = null;
    if (selectedNavItem.mediaSource.toLowerCase().indexOf('youtube') < 0 ) { youTube = false; }
    else if (selectedNavItem.objectType.toLowerCase().indexOf('playlist') > -1 ) { objectType = 'playlistId' ; youTube = true; }
    else if (selectedNavItem.objectType.toLowerCase().indexOf('channel') > -1 ) { objectType = 'channelId'; youTube = true; }
    else if (selectedNavItem.objectType.toLowerCase().indexOf('video') > -1 ) { objectType = 'video'; youTube = true; }
    else if (selectedNavItem.objectType.toLowerCase().indexOf('user') > -1 ) { objectType = 'user'; youTube = true; }

    if ( youTube && objectType != null && selectedNavItem.objectID ) {
      //This is a Youtube Channel or Playlist
      aboutPane = React.createElement(
        Youtube,
        {
          description: selectedNavItem.title,

          //Prime Key:  AIzaSyD6O2VK5QY_NY2UbNINCM-VDjmth2NRU3U
          //Quota Key:  AIzaSyCKn9lvgbee5cs62v7oRRoAJKXCnv4Y9Wo
          apiKey: 'AIzaSyD6O2VK5QY_NY2UbNINCM-VDjmth2NRU3U', 
          objectId: selectedNavItem.objectID,
          maxResults: 5,
          objectType: objectType,
        }
      );

    } else if ( selectedNavItem.mediaSource === 'facebook' ) {
      //This is a Youtube Channel or Playlist
      console.log('Facebook page props: ', selectedNavItem);
      aboutPane = React.createElement(
        FacebookPage,
        {
          company: selectedNavItem.objectID,
          width: Number(700),
          smallHeader: false,
          hideCover: false,
          showFacepile: false,
        }
      );
      console.log('aboutPane:', aboutPane);

    } else if ( selectedNavItem.mediaSource === 'twitter' ) {
      //This is a Youtube Channel or Playlist
      console.log('Twitter page props: ', selectedNavItem);
      aboutPane = <TweetsFeedWebPart

          title={Entity.title}
          account= {selectedNavItem.objectID}
          width= '600'
          height= '400'

          autoLimit= {true}
          limit= {250}
          header= {true}
          dark= {true}
          footer= {false}
          borders= {false}
          scrollbars= {true}
          transparent= {true}
          linkColor= "#820bbb"
          borderColor= "#a80000"

      ></TweetsFeedWebPart>;

      console.log('aboutPane:', aboutPane);

    } else if ( selectedNavItem.mediaSource.indexOf('web') > -1 || selectedNavItem.mediaSource === 'blog' ) {
      //This is a Youtube Channel or Playlist
      console.log('Webpage page props: ', selectedNavItem);
      aboutPane = 
      <Iframe url={selectedNavItem.url}
        width= '600'
        height= '400'
        id="myAboutPageId"
        className="myClassname"
        display="block"
        position="relative"
      />
      ;

      console.log('aboutPane:', aboutPane);

    } else if ( selectedNavItem.mediaSource === 'twitter' ) {
      aboutPane = 
      <AboutMe
        imageUrl={ (!showDebug ? this.props.parentState.selectedEntity.profilePic : '')}
        setImgCover='centerContain'
        setImgFit='portrait'
        imageHeight={ !showDebug ? 400 : 0 }
        imageWidth={ !showDebug ? 600 : 0 }
        >
      </AboutMe>;

    } else {
      aboutPane = 
      <div>
      <Stack horizontal={false} horizontalAlign={"center"} tokens={stackFormRowsTokens}>
      <AboutMe
        imageUrl={ (!showDebug ? this.props.parentState.selectedEntity.profilePic : '')}
        setImgCover='centerContain'
        setImgFit='portrait'
        imageHeight={ !showDebug ? 400 : 0 }
        imageWidth={ !showDebug ? 600 : 0 }
        >
      </AboutMe>
      <FootPrint
        footprint={Entity.footPrint}
      ></FootPrint>
      </Stack>
      </div>;


    }


    if ( this.props.parentState.selectedEntity && this.props.parentState.navigationType !== 'asdfasdf' ) {
      console.log('Inside AboutInfo');
      return (
        <div>
        <Stack horizontal={false} horizontalAlign={"center"} tokens={stackFormRowsTokens}>{/* Stack for Buttons and Fields */}

          { aboutPane }

          <div className={ styles.description }>
            { /* https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript/46862258#46862258:
              JSON.stringify(jsonobj,null,'\t') */}

            { ( !showDebug && this.props.parentState.selectedEntity ? (JSON.stringify(this.props.parentState.selectedEntity.navigation, undefined, 4)) : '')  }
            <Stack horizontal={false} horizontalAlign={"center"} tokens={stackFormRowsTokens}>
              <div style={{ fontSize: 20, fontWeight: 'bold'}}>
                { (showDebug ? 'This is the entire JSON for ' + this.props.parentState.selectedEntity.title : '' )}
              </div>
              <div>
                { (showDebug && this.props.parentState.selectedEntity ? (JSON.stringify(this.props.parentState.selectedEntity, undefined, 4)) : '')  }                
              </div>
            </Stack>
          </div>
          </Stack>  {/* Stack for Buttons and Fields */}
        </div>
      );
    } else {
      console.log('null AboutInfo');
      return null;
    }
  }
  }
