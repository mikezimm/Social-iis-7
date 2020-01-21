//Category may need to be defined optionally here
//https://www.logicbig.com/tutorials/misc/typescript/interface-to-describe-object-with-optional-properties.html


export interface tileTime {
  time?: Date;
  yr? : number;
  mo? : number;
  date? : number;
  day? : number;
  hr?: number;
  locDate?: string;
  locTime?: string;
  age?: number;
  ageCat?: string;
  yrMo?: string;
  moDay?: string;

}


export interface IAboutMeProps {

  //Main webpart properties
  description?: string;

  //Image & main tile properties
  onHoverZoom?: string;
  setSize?: string;
  setRatio?: string;
  setImgFit?: string;
  setImgCover?: string;
  target?: string;

  //Custom image properties
  imageWidth?: number;
  imageHeight?: number;
  textPadding?: number;


  //Mostly come from column values
  imageUrl: string;
  title?: string;
  href?: string;
  
  options?: string;
  color?: string;
  imgSize?: string;

  masked?: boolean;

}