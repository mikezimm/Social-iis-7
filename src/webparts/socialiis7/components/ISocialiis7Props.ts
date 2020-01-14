import { string } from "prop-types";

import { PageContext } from '@microsoft/sp-page-context';

import { Nav, INavLink } from 'office-ui-fabric-react/lib/Nav';

export interface ISocialTopicModel {


}


export interface ISocialModels {


}

export interface IWeb {
  title: string;
  titleKey?: string;
  order: number; //For Sorting
  url: string;
  codeType: string; //Used to determine what functions to have avaialble
  objectID?: string;

}

export interface INewsFeed {
  title: string;
  titleKey?: string;
  order: number; //For Sorting
  url: string;
  codeType: string; //Used to determine what functions to have avaialble

}

export interface IYoutubeObject {
  title: string;
  objectType: string; //user,Channel, Playlist, Videos, Video
  objectID: string; //Used to determine what functions to have avaialble
  objectUrl: string; // to be used as generic link if no API key is given
}

export interface IYoutube {
  title: string;
  user?: string; //Youtube User (from URL)
  order?: number; //For Sorting
  items?: IYoutubeObject[];
  channels?: IYoutubeObject[];
  playLists?: IYoutubeObject[];

}

/**
 * 
 */

export interface IEntity {
  title: string; //
  titleKey?: string;
  keywords: string[];
  profilePic: string;
  webSites?: IWeb[];
  youtube?: IYoutube;
  twitter?: IWeb;
  linkedIn?: IWeb;
  blog?: IWeb[];
  instagram?:IWeb;
  facebook?: IWeb;
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

    mainTopic?: string;
    subTopic1?: string;
    subTopic2?: string;
    subTopic3?: string;

}
export interface ISocialiis7Props {

  // 0 - Context
  description: string;
  pageContext: PageContext;
  tenant: string;
  urlVars: {};

  // 1 - Analytics options
  useListAnalytics: boolean;
  analyticsWeb?: string;
  analyticsList?: string;

  // 2 - Source and destination list information
  sourceListURL?: string; //Get from list item  
  sourceListTitle: string;  // Static Name of list (for URL) - used for links and determined by first returned item

  // 3 - 

  // 4 - 

  // 5 - UI Defaults

  // 6 - User Feedback

  // 7 - Media Choices - Left Side bar
  navigationType: string;

  topics: ITopics;

  // 8 - Pivot Choices - Top Bar
  pivotSize: string;
  pivotFormat: string;
  pivotOptions: string;
  pivotTab: string;  //May not be needed because we have projectMasterPriority


  
  // 9 - Other web part options


}
