import { string } from "prop-types";

import { PageContext } from '@microsoft/sp-page-context';

import { Nav, INavLink } from 'office-ui-fabric-react/lib/Nav';

import { ITheTime } from '../../../services/dateServices';


export interface ISocialTopicModel {


}


export interface ISocialModels {


}

export interface IWeb {
  NavTitle: string;
  titleKey?: string;
  order?: number; //For Sorting
  url: string;
  objectType?: string; //Used to determine what functions to have avaialble
  objectID?: string;

}

export interface INewsFeed {
  NavTitle: string;
  titleKey?: string;
  order: number; //For Sorting
  url: string;
  objectType: string; //Used to determine what functions to have avaialble

}

export interface IYoutubeObject extends IWeb{
  NavTitle: string;
  titleKey?: string;
  objectType?: string; //user,Channel, Playlist, Videos, Video
  objectID?: string; //Used to determine what functions to have avaialble
  url: string; // to be used as generic link if no API key is given
  order?: number; //For Sorting
}

export interface IYoutube {
  NavTitle: string;
  user?: string; //Youtube User (from URL)
  order?: number; //For Sorting
  items?: IWeb[];
  channels?: IWeb[];
  playLists?: IWeb[];

}

/**
 * 
 */

export const NonArrayNodes = ['facebook','twitter','stackExchange','linkedIn','github','wikipedia','instagram','home'];

export interface IEntity {
  Title: string; //
  source?: string;
  titleKey?: string;
  footPrint?: string[];
  keywords: string[];
  keywordsText?: string;

  profilePic: string;
  webSites?: IWeb[];
  youtube?: IYoutube;
  twitter?: IWeb;
  linkedIn?: IWeb;
  blog?: IWeb[];
  office365?: IWeb[];
  instagram?:IWeb;
  facebook?: IWeb;
  stackExchange?: IWeb;
  home?: IWeb;
  github?: IWeb;
  location?: IWeb; //Like Bing Map of city or office or whatever.
  androidStore?: any;
  appleStore?: any;
  stock?: IWeb;
  wikipedia?: IWeb;
  navigation?: INavLink[];
  selectedNav?: INavLink;
  steamStore?: IWeb[];
  feeds?: INewsFeed[];


}



/**
 * IEntityGroup are the groups of tabs or pivots at the top of the webpart
 * Names could be something like one fo these:
 * For automotive:  OEMs; Suppliers; Industry; Government 
 * OR for Office:  SharePoint; Teams; Excel; PowerApps etc... 
 * OR for SPFx:  SIGs; MVPs; Preferred Vendors
 * 
 */
export interface IEntityGroup {
  name: string; //
  entities: IEntity[];

}


export interface ITopicModel {

  category: string; // Like Manufacturing or Tech or MSFT

  //Name given to the topic - to help fetch this set of Social Footprints Like Automotive or Office or SPFx
  name: string;

  // Subcategories are the groups of entities
  subCategories: string[]; 

}


export interface IEntityModel {

  name: string; //
  type: string; //Person/MVP, Meeting, Company, Vendor, etc....


}

export interface ITopics {
    titleTopic?: string;
    mainTopic?: string;
    subTopic1?: string;
    subTopic2?: string;
    subTopic3?: string;
    toggleDef?: string;  //String of topics with ; parser for Default load
    toggle0?: string;  //String of topics with ; parser for Toggle button
    toggle1?: string;  //String of topics with ; parser for Toggle button
    toggle2?: string;  //String of topics with ; parser for Toggle button
    toggle3?: string;  //String of topics with ; parser for Toggle button
    toggle4?: string;  //String of topics with ; parser for Toggle button
    specific?: string; //For specific list of entities
    random?: string; //For Random topics
    current?: number;

}
export interface ISocialiis7Props {

  // 0 - Context
  description: string;
  pageContext: PageContext;
  tenant: string;
  urlVars: {};
  pageType: string; //localWorkbench; hostedWorkbench; SharePoint
  WebpartElement: HTMLElement;   //Size courtesy of https://www.netwoven.com/2018/11/13/resizing-of-spfx-react-web-parts-in-different-scenarios/
 
  // 1 - Analytics options
  useListAnalytics: boolean;
  analyticsWeb?: string;
  analyticsList?: string;
  startTime: ITheTime;
  analyticsLoad: boolean;
  analyticsEntity: boolean;
  analyticsNav: boolean;
  analyticsError: boolean;

  // 2 - Source and destination list information
  useLocalList: Boolean;
  useMasterList: Boolean;
  localListURL?: string; //Get from list item
  masterListURL?: string; //Corporate or Central list url
  localListFilter?: string; //Get from list item
  masterListFilter?: string; //Corporate or Central list url
  sourceListTitle: string;  // Static Name of list (for URL) - used for links and determined by first returned item

  // 3 - 

  // 4 - 

  // 5 - UI Defaults
  setLayout?: string;
  
  // 6 - User Feedback

  // 7 - Media Choices - Left Side bar
  navigationType: string;

  topics: ITopics;
  togglePropTopicHelp: boolean;

  userEntities1: string;
  userEntities2: string;  
  userEntities3: string;

  // 8 - Pivot Choices - Top Bar
  pivotSize: string;
  pivotFormat: string;
  pivotOptions: string;
  pivotTab: string;  //May not be needed because we have projectMasterPriority


  
  // 9 - Other web part options


}