
import * as React from 'react';
import * as ReactDom from 'react-dom';

import { ITweetsFeedWebPartProps } from './ITweetsFeedWebPartProps';
import AboutMe from '../AboutMe/AboutMe';
import styles from './TweetsFeed.module.scss';

import { CompoundButton, Stack, IStackTokens, elementContains } from 'office-ui-fabric-react';

//Tried this but it errors out:  https://github.com/SharePoint/sp-dev-docs/blob/master/docs/spfx/web-parts/basics/add-an-external-library.md#loading-a-non-amd-module
//import twitter = require('twitter');
var twitter: any = require('twitter');

export default class TweetsFeedWebPart extends React.Component<ITweetsFeedWebPartProps, {}> {

  public constructor(props:ITweetsFeedWebPartProps) {
    super(props);

    //https://stackoverflow.com/a/46816824/4210807
    console.log('twitter', twitter);
    setTimeout( () => twitter.load(), 0 );  //This puts the library into memory because console log shows it is available
  }

  public render(): React.ReactElement<ITweetsFeedWebPartProps> {

    const stackFormRowsTokens: IStackTokens = { childrenGap: 10 };

    let tweeterPage = null;
    var dataChrome = '';

    if (this.props.footer === false)
      dataChrome += "nofooter ";
    if (this.props.header === false)
      dataChrome += "noheader ";
    if (this.props.borders === false)
      dataChrome += "noborders ";
    if (this.props.scrollbars === false)
      dataChrome += "noscrollbar ";
    if (this.props.transparent === true)
      dataChrome += "transparent ";
      
    if (this.props.account == null || this.props.account == '') {

      tweeterPage =         
      <Stack horizontal={false} 
        horizontalAlign={"center"}  
        verticalAlign={"space-between"} 
        
        tokens={stackFormRowsTokens}>{/* Stack for Buttons and Fields */}

          <AboutMe
            imageUrl={ ('https://img.icons8.com/color/96/000000/twitter.png')}
            setImgCover='centerContain'
            setImgFit='portrait'
            imageHeight={ 128 }
            imageWidth={ 128 }
            >
          </AboutMe>
          <div><span className={styles.twitterItem}>{'We had a problem finding the Twitter account!'}</span></div>
          <div>
              <a className="twitter-timeline" 
                data-link-color={this.props.linkColor} 
                data-border-color={this.props.borderColor} 
                //height={this.props.height} 
                data-chrome={dataChrome} 
                data-tweet-limit={this.props.limit}
                //width={this.props.width} 
                href={ ('https://twitter.com/') }
                target="_blank"
                ><span className={styles.twitterItem}>{'Search Twitter '}</span>
              </a>
            </div>
            <div style={{paddingBottom: 50}}></div>
      </Stack>;

    } else {
  
      var limit = '';
      if (this.props.autoLimit === false)
        limit = 'data-tweet-limit="' + this.props.limit + '"';

        /*  Original vanilla js looked like this:
            tweeterPage = '<a className="twitter-timeline" data-link-color="' + this.props.linkColor 
              + '" data-border-color="' + this.props.borderColor + '" height="' 
              + this.props.height + '" width="' + this.props.width 
              + '" ' + limit + ' data-chrome="' + dataChrome 
              + '" href="https://twitter.com/' + this.props.account 
              + '">Tweets by ' + this.props.account + '</a>';

        */  //Modified for react like this

        tweeterPage = 
        <Stack horizontal={false} 
        horizontalAlign={"center"}  
        verticalAlign={"space-between"} 
        
        tokens={stackFormRowsTokens}>{/* Stack for Buttons and Fields */}

          <AboutMe
            imageUrl={ ('https://img.icons8.com/color/96/000000/twitter.png')}
            setImgCover='centerContain'
            setImgFit='portrait'
            imageHeight={ 128  }
            imageWidth={ 128}
            >
          </AboutMe>
          <div>

          {
            /*
            // Exactly what you get from publish.twitter.com
            <a class="twitter-timeline" 
            href="https://twitter.com/SharePoint?ref_src=twsrc%5Etfw"
            >Tweets by SharePoint</a> 
            <script async src="https://platform.twitter.com/widgets.js" 
              charset="utf-8"></script>

              My original attempt to reactify it
                data-link-color={this.props.linkColor} 
                data-border-color={this.props.borderColor} 
                //height={this.props.height} 
                data-chrome={dataChrome} 
                data-tweet-limit={this.props.limit}
                //width={this.props.width} 
                href={ ('https://twitter.com/' + this.props.account) }
                target="_blank"
                ><span className={styles.twitterItem}>{'See Tweets on Twitter for '} { (this.props.title) }</span>


            */}
              <a className="twitter-timeline" 
                data-link-color={this.props.linkColor} 
                data-border-color={this.props.borderColor} 
                //height={this.props.height} 
                data-chrome={dataChrome} 
                data-tweet-limit={this.props.limit}
                //width={this.props.width} 
                href={ ('https://twitter.com/' + this.props.account) }
                target={'_blank'}
                ><span className={styles.twitterItem}>{'See Tweets on Twitter for '} { (this.props.title) }</span>
              </a>
            </div>
            <div style={{paddingBottom: 50}}>

          </div>
        </Stack>;


    }

    console.log('tweeterPage', tweeterPage);
    //console.log('Build page navigation: ', this.props, this.state);

    return (tweeterPage);

  }



  }

