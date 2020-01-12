

import * as React from 'react';
import * as ReactDom from 'react-dom';

import {ISocialiis7State} from './ISocialiis7State';

import { ISocialiis7Props, IEntity } from './ISocialiis7Props';

import * as strings from 'Socialiis7WebPartStrings';

import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

import styles from './Socialiis7.module.scss';
import AboutMe from './AboutMe/AboutMe';
import { CompoundButton, Stack, IStackTokens, elementContains } from 'office-ui-fabric-react';

import Youtube from './youTube/Youtube';
import { IYoutubeProps } from './youTube/IYoutubeProps';


export interface IAboutInfoProps {
  parentProps:ISocialiis7Props,
  parentState: ISocialiis7State,
  
}

export interface IAboutInfoState {
  selectedEntityTitle: string;
}

export default class AboutInfo extends React.Component<IAboutInfoProps, IAboutInfoState> {
  constructor(props: IAboutInfoProps) {
    super(props);
    this.setState({ 
      selectedEntityTitle: this.props.parentState.selectedEntity.titleKey,
    });
  }

  public render(): React.ReactElement<IAboutInfoProps> {

    let selectedNavKey = this.props.parentState.selectedNavKey;
    let selectedNavItem = this.props.parentState.selectedNavItem;
    let Entity = this.props.parentState.selectedEntity;  
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
    if (selectedNavItem.objectType.toLowerCase().indexOf('playlist') > -1 ) { objectType = 'playlistId' ; youTube = true }
    else if (selectedNavItem.objectType.toLowerCase().indexOf('channel') > -1 ) { objectType = 'channelId'; youTube = true }

    if ( youTube && objectType != null && selectedNavItem.objectID ) {
      //This is a Youtube Channel or Playlist
      aboutPane = React.createElement(
        Youtube,
        {
          description: 'Description',
          apiKey: 'AIzaSyD6O2VK5QY_NY2UbNINCM-VDjmth2NRU3U', //
          objectId: selectedNavItem.objectID,
          maxResults: 3,
          objectType: objectType,
        }
      );


    } else {
      aboutPane = 
      <AboutMe
        imageUrl={ (!showDebug ? this.props.parentState.selectedEntity.profilePic : '')}
        setImgCover='centerContain'
        setImgFit='portrait'
        imageHeight={ !showDebug ? 400 : 0 }
        imageWidth={ !showDebug ? 600 : 0 }
        >
      </AboutMe>
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
