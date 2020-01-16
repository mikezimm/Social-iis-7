
import { ISocialiis7Props, IEntity } from './ISocialiis7Props';
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

export interface ILoadData {
    Entities1: IEntity[];
    Entities2: IEntity[];
    Entities4: IEntity[];
    Entities7: IEntity[];
    Entities9: IEntity[];

    userEntities1: IEntity[];
    userEntities2: IEntity[];
    userEntities3: IEntity[];

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

    // 1 - Analytics options
    
    description: string;
    endTime?: ITheTime;

    // 2 - Source and destination list information
    sourceListURL?: string; //Get from list item  
    sourceListName: string;  // Static Name of list (for URL) - used for links and determined by first returned item


    // 3 - 

    // 4 - 

    // 5 - UI Defaults

    // 6 - User Feedback

    // 7 - Media Choices - Left Side bar
    navigationType: string;

    topics: {
        mainTopic?: string;
        subTopic1?: string;
        subTopic2?: string;
        subTopic3?: string;
    };

    //Saved in webpart props
    userEntities1?: string;
    userEntities2?: string;  
    userEntities3?: string;

    //Input box any user can add to
    userEntitiesTest1: string;
    userEntitiesTest2: string;
    userEntitiesTest3: string;
    
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