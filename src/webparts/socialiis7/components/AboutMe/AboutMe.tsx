import * as React from 'react';
import { Image, ImageFit, } from 'office-ui-fabric-react/lib/Image';
import { css, IImageProps, sizeToPixels, } from 'office-ui-fabric-react';

import styles from './AboutMe.module.scss';

import { IAboutMeProps } from './AboutMeProps';
import { IAboutMeState } from './AboutMeState';

import { imageOptionsGroup, } from '../../../../services/propPane/ReactImageOptions';

export default class AboutMe extends React.Component<IAboutMeProps, IAboutMeState> {

  constructor(props: IAboutMeProps, state: IAboutMeState) {
    super(props);

    this.state = {
      hovering: 10,
      visible:10
    };
  }

  public mouseOver(event): void {
    this.setState({ hovering: true });
  }

  public mouseOut(event): void {
    this.setState({ hovering: false });
  }

  public specialClick(event): void {
  }

  public render(): React.ReactElement<IAboutMeProps> {
    
    //console.log('AboutMe: this.props',this.props);
    let thisTop = `${this.props.imageHeight * .6 }px`;
    let thisHeight = `${this.props.imageHeight}px`;
    let thisWidth = `${this.props.imageWidth}px`;
    let thisFit = this.props.setImgFit.indexOf('cover') ?  'cover' : 'contain';
    //let imgURL = (item[this.props.backgroundImageField]) ? item[this.props.backgroundImageField].Url : this.props.fallbackImageUrl;
    //let thisTarget = (item[this.props.newTabField]) ? "_blank" : "";
    //let thisHref = (item[this.props.linkField]) ? item[this.props.linkField].Url : "#";
    let thisPadding = `${this.props.textPadding}px`;
    let opacityVal = this.props.masked ? .5 : 1 ;

    var iHoverZoomStyle = styles.imgHoverZoomHover12;

      return (
        <div>
          <a href={this.props.href} 
            className={styles.aboutMe}
            style={ {width: thisWidth, height: thisHeight }  }
            target={imageOptionsGroup.getTarget(this.props.target)}
            role="listitem" 
            onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)}
            onClick={this.specialClick.bind(this)}
            >

        <div className={ [styles.pTileItemWrapper, styles.pTileItemWrapperExpanded].join(" ")}
        style={ { width: thisWidth, height: thisHeight } } 
        >
          <Image 
            className={
              styles.pTileItemImageCustom} 
            style={{opacity: opacityVal}}
            src={this.props.imageUrl} 
            shouldFadeIn={true} 
            imageFit={imageOptionsGroup.getImgFit(this.props.setImgFit)}
            coverStyle={imageOptionsGroup.getImgCover(this.props.setImgCover)}      
          />

          </div>

          </a>
          </div>
  
      );

  }

}
