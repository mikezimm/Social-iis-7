
import { ISocialiis7Props, ITopics, IEntity } from './ISocialiis7Props';
import { string } from 'prop-types';

import { ITheTime } from '../../../services/dateServices';

export interface IPivot {
    headerText: string;
    itemKey: string;
    filter?: string;
    data?: string;
}
  
export interface IMyPivots {
    allTopics: IPivot[];
    allEntityKeywords: IPivot[];
    keysForTopic: IPivot[];
    subTopic1Titles: IPivot[];
    subTopic2Titles: IPivot[];
    subTopic3Titles: IPivot[];
    entTitlesForTopics: IPivot[];
    spacers: IPivot[];
}
 
  
export interface ILink {
    description: string;
    url: string;
}
  
export interface IUser {
    title: string;
    initials?: string;  //Single person column
    email?: string;  //Single person column
    id?: any;
    Id?: any;
    ID?: any;
    isSiteAdmin?:boolean;
    LoginName?: string;
}

export interface IListEntities {
    listEntites: IEntity[];
    entityTitles: string[];

}

export interface ILoadData {
    Entities1: IEntity[];
    Entities2: IEntity[];
    Entities4: IEntity[];
    Entities7: IEntity[];
    Entities9: IEntity[];

    userEntities1: IEntity[];
    userEntities2: IEntity[];
    userEntities3: IEntity[];

    localItems?: any;
    localEntities?: IEntity[];
    localEntityTitles?: string[];
    
    masterItems?: any;
    masterEntities?: IEntity[];
    masterEntityTitles?: string[];

    allEntities: IEntity[];
    allEntityKeywords: string[];
    allTopics: string[];

    entitiesForMainTopic: IEntity[];
    keysForTopic: string[];

    availSubTopicEntities: IEntity[];
    subTopic1Entities: IEntity[];
    subTopic2Entities: IEntity[];
    subTopic3Entities: IEntity[];

}

export interface ISocialiis7State {
    // 0 - Context
    currentUser?: IUser;  //Current user information
    WebpartHeight?:  Number;    //Size courtesy of https://www.netwoven.com/2018/11/13/resizing-of-spfx-react-web-parts-in-different-scenarios/
    WebpartWidth?:   Number;    //Size courtesy of https://www.netwoven.com/2018/11/13/resizing-of-spfx-react-web-parts-in-different-scenarios/

    // 1 - Analytics options
    
    description: string;
    endTime?: ITheTime;
    lastEvent?: string;

    // 2 - Source and destination list information
    useLocalList?: Boolean;
    useMasterList?: Boolean;
    hardCodedLoaded?: Boolean;
    localListLoaded?: Boolean;
    masterListLoaded?: Boolean;
    allLoaded: Boolean;
    loadOrder?: string[];
    localListURL?: string; //Get from list item  
    masterListURL?: string; //Corporate or Central list url
    localListFilter?: string; //Get from list item
    masterListFilter?: string; //Corporate or Central list url
//    sourceListName: string;  // Static Name of list (for URL) - used for links and determined by first returned item


    // 3 - 

    // 4 - 

    // 5 - UI Defaults
    setLayout?: string;
    
    // 6 - User Feedback

    // 7 - Media Choices - Left Side bar
    navigationType: string;

    topics: ITopics ;

    //Saved in webpart props
    userEntities1?: string;
    userEntities2?: string;  
    userEntities3?: string;
    
    // 8 - Pivot Choices - Top Bar
    currentPivotSet: string;
    currentPivots: IPivot[][];
    selectedEntity: IEntity;
    selectedNavKey: string;
    selectedNavItem: any;
    selectedMedia : string;

    pivots?: IMyPivots;
    pivtTitles?:string[];
    filteredCategory?: string;
    pivotDefSelKey?: string;


    // 9 - Other web part options


    loadStatus?: string;
    loadData: ILoadData;

    userLoadStatus?: string;

    showTips?: string;
    loadError?: string;
  
    listError?: boolean;
    itemsError?: boolean;
  
    searchType?: string;
    searchShow?: boolean;
    searchCount?: number;
    searchWhere?: string;

}