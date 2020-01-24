import * as React from 'react';
import { Image, ImageFit, } from 'office-ui-fabric-react/lib/Image';
import { css, IImageProps, sizeToPixels, } from 'office-ui-fabric-react';

import styles from './AboutMe.module.scss';
import stylesF from './FootPrint.module.scss';

import { imageOptionsGroup, } from '../../../../services/propPane/ReactImageOptions';
import { CompoundButton, Stack, IStackTokens, elementContains } from 'office-ui-fabric-react';

import { MyIcons } from '../Icons';

export interface IFootPrintProps {
    footprint: string[];
}

export interface IFootPrints {
    imageUrl: string ;
    opacity: number ;    
}

export default class FootPrint extends React.Component<IFootPrintProps> {

  public render(): React.ReactElement<IFootPrintProps> {
    let maskedOpacity = .3;

    let imageHeight = 64;
    let imageWidth = 64;
    let padding = 10;
    console.log('AboutMe: this.props',this.props);
    let thisTop = `${imageHeight * .6 }px`;
    thisTop = `${ 0 }px`;
    let thisHeight = `${imageHeight}px`;
    let thisWidth = `${imageWidth}px`;
    let overallHeight = thisHeight;
    let overallWidth = imageWidth * 10;
    let thisFit = 'contain';
    //let imgURL = (item[this.props.backgroundImageField]) ? item[this.props.backgroundImageField].Url : this.props.fallbackImageUrl;
    //let thisTarget = (item[this.props.newTabField]) ? "_blank" : "";
    //let thisHref = (item[this.props.linkField]) ? item[this.props.linkField].Url : "#";
    let thisPadding = `${padding}px`;

    let footPrint1 : IFootPrints[] = [];
    let footPrint2 : IFootPrints[] = [];

    //This section creates all icons but grays out unused mediaTypes
    footPrint1.push({ opacity: this.props.footprint.indexOf('wikipedia') > -1 ? 1 : maskedOpacity , imageUrl:  MyIcons.iconWiki });
    footPrint1.push({ opacity: this.props.footprint.indexOf('web') > -1 ? 1 : maskedOpacity , imageUrl:  MyIcons.iconWebsite });
    footPrint1.push({ opacity: this.props.footprint.indexOf('linkedin') > -1 ? 1 : maskedOpacity , imageUrl:  MyIcons.iconLinkedIn });
    footPrint1.push({ opacity: this.props.footprint.indexOf('blog') > -1 ? 1 : maskedOpacity , imageUrl:  MyIcons.iconBlog });
    footPrint1.push({ opacity: this.props.footprint.indexOf('instagram') > -1 ? 1 : maskedOpacity , imageUrl:  MyIcons.iconInstagram });
    footPrint1.push({ opacity: this.props.footprint.indexOf('facebook') > -1 ? 1 : maskedOpacity , imageUrl:  MyIcons.iconFacebook });
    footPrint1.push({ opacity: this.props.footprint.indexOf('twitter') > -1 ? 1 : maskedOpacity , imageUrl:  MyIcons.iconTwitter });
    footPrint1.push({ opacity: this.props.footprint.indexOf('youtube') > -1 ? 1 : maskedOpacity , imageUrl:  MyIcons.iconYouTube });
    footPrint1.push({ opacity: this.props.footprint.indexOf('github') > -1 ? 1 : maskedOpacity , imageUrl:  MyIcons.iconGithub });
    footPrint1.push({ opacity: this.props.footprint.indexOf('stackexchange') > -1 ? 1 : maskedOpacity , imageUrl:  MyIcons.iconStackExchange });

    //This section only creates icon if the mediaType exists on the entity
    if ( this.props.footprint.indexOf('wikipedia') > -1 ) { footPrint2.push({ opacity:  1 , imageUrl:  MyIcons.iconWiki }); }
    if ( this.props.footprint.indexOf('web') > -1 ) { footPrint2.push({ opacity:  1 , imageUrl:  MyIcons.iconWebsite }); } 
    if ( this.props.footprint.indexOf('linkedin') > -1 ) { footPrint2.push({ opacity:  1 , imageUrl:  MyIcons.iconLinkedIn }); } 
    if ( this.props.footprint.indexOf('blog') > -1 ) { footPrint2.push({ opacity:  1 , imageUrl:  MyIcons.iconBlog }); } 
    if ( this.props.footprint.indexOf('instagram') > -1 ) { footPrint2.push({ opacity:  1 , imageUrl:  MyIcons.iconInstagram }); } 
    if ( this.props.footprint.indexOf('facebook') > -1 ) { footPrint2.push({ opacity:  1 , imageUrl:  MyIcons.iconFacebook }); } 
    if ( this.props.footprint.indexOf('twitter') > -1 ) { footPrint2.push({ opacity:  1 , imageUrl:  MyIcons.iconTwitter }); } 
    if ( this.props.footprint.indexOf('youtube') > -1 ) { footPrint2.push({ opacity:  1 , imageUrl:  MyIcons.iconYouTube }); } 
    if ( this.props.footprint.indexOf('github') > -1 ) { footPrint2.push({ opacity:  1 , imageUrl:  MyIcons.iconGithub }); } 
    if ( this.props.footprint.indexOf('stackexchange') > -1 ) { footPrint2.push({ opacity:  1 , imageUrl:  MyIcons.iconStackExchange }); } 

    //                className={
    //    styles.pTileItemImageCustom} 
    //        <div style={ {width: thisWidth, height: thisHeight, top: thisTop, padding: padding }  } >
    let allIcons = footPrint2.map(icon => (
        <div>
            <Image 
                styles={{ root: { width: 64, height: 64, } }}
                style={{opacity: icon.opacity,}}
                src={icon.imageUrl} 
                shouldFadeIn={true} 
                imageFit={imageOptionsGroup.getImgFit('contain')}
                coverStyle={imageOptionsGroup.getImgCover('cover')}      
            />
        </div>
      ));

    if (this.props.footprint.indexOf('blog') > -1 ) {  }

    var iHoverZoomStyle = styles.imgHoverZoomHover12;
    const stackFormRowsTokens: IStackTokens = { childrenGap: 10 };

    //        <div className={ [styles.pTileItemWrapper, styles.pTileItemWrapperExpanded].join(" ")}

      return (
        <div 
          className={ '' }
          style={ { width: overallWidth, height: overallHeight } } >
          <Stack horizontal={true} horizontalAlign={"space-evenly"} tokens={stackFormRowsTokens}>
            {( allIcons )}
          </Stack>
        </div>
      );

  }



}
