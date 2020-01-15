
import * as React from 'react';
import * as ReactDom from 'react-dom';

import { ITweetsFeedWebPartProps } from './ITweetsFeedWebPartProps';

var twttr: any = require('twitter');

export default class TweetsFeedWebPart extends React.Component<ITweetsFeedWebPartProps, {}> {


  constructor(props: ITweetsFeedWebPartProps) {
    super(props);
    this.setState({ 
      
    });
  }

  public render(): React.ReactElement<ITweetsFeedWebPartProps> {

    let tweeterPage = null;
    if (this.props.account == null || this.props.account == '') {

      tweeterPage = <div className="ms-MessageBar">
          <div className="ms-MessageBar-content">
            <div className="ms-MessageBar-icon">
              <i className="ms-Icon ms-Icon--Info"></i>
            </div>
            <div className="ms-MessageBar-text">
              ${'Error Message Here'}
            </div>
          </div>
        </div>

    } else {
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
  
      var limit = '';
      if (this.props.autoLimit === false)
        limit = 'data-tweet-limit="' + this.props.limit + '"';
  
      tweeterPage = '<a class="twitter-timeline" data-link-color="' + this.props.linkColor 
        + '" data-border-color="' + this.props.borderColor + '" height="' 
        + this.props.height + '" width="' + this.props.width 
        + '" ' + limit + ' data-chrome="' + dataChrome 
        + '" href="https://twitter.com/' + this.props.account 
        + '">Tweets by ' + this.props.account + '</a>';

    }

    console.log('tweeterPage', tweeterPage);
    //console.log('Build page navigation: ', this.props, this.state);
    twttr.widgets.load();
    return tweeterPage;

  }



  }

