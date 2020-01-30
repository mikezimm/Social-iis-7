import * as React from 'react';
import styles from './Socialiis7.module.scss';
import { ISocialiis7Props, ITopics, IEntity, NonArrayNodes } from './ISocialiis7Props';
import {IUser, ISocialiis7State, IMyPivots, IPivot, ILoadData, IListEntities} from './ISocialiis7State';
import { escape, cloneDeep } from '@microsoft/sp-lodash-subset';

import { sp } from '@pnp/sp';
//Updated Jan 5, 2020 per https://pnp.github.io/pnpjs/getting-started/
import { Web } from "@pnp/sp/presets/all";

import { Pivot, PivotItem, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import { IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { Nav, INavLink } from 'office-ui-fabric-react/lib/Nav';
import { DefaultButton, autobind, getLanguage, ZIndexes } from 'office-ui-fabric-react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

import { pivotOptionsGroup, } from '../../../services/propPane';

import { CompoundButton, Stack, IStackTokens, elementContains } from 'office-ui-fabric-react';

import {
  buildEntities,buildEntityKeywords, getEntitiesForThis, buildUserEntities, IsValidJSONString, getPropsFromObjectInfo,
  addOtherProps

} from './Entities1/1EntityBuilder';
import {  buildEntities2} from './Entities2/1EntityBuilder';
import {  buildEntities4} from './Entities4/1EntityBuilder';
import {  buildEntities7} from './Entities7/1EntityBuilder';
import {  buildEntities8} from './Entities8/1EntityBuilder';
import {  buildEntities9} from './Entities9/1EntityBuilder';

import { saveTheTime, getTheCurrentTime, saveAnalytics } from '../../../services/createAnalytics';


import * as choiceBuilders from './choiceFieldBuilder';

import PageNavigator from './Navigator/PageNavigator';
import { IPageNavigatorProps } from './Navigator/IPageNavigatorProps';
import MyCommandBar from './CommandBar/CommandBar';

import { IAboutInfoProps } from './AboutInfo';
import AboutInfo from './AboutInfo';
import * as myErrors from './ErrorMessages';
import * as listBuilders from './ListView/ListView';

export default class Socialiis7 extends React.Component<ISocialiis7Props, ISocialiis7State> {

  private createPivotData(sourceArray: any [], key = null){
    // Using https://stackoverflow.com/questions/3103962/converting-html-string-into-dom-elements
    let result : IPivot[] = [];
    let headers: string[]= [];
    if (!key) {
      for (let item of sourceArray) {
        let newPivot = {
          headerText: item,
          itemKey: item.replace(" ", ""),
          filter: item,
        };
        if (headers.indexOf(item) < 0 ) { result.push(newPivot); headers.push(item); }
      }
    } else {
      for (let item of sourceArray) {
        if (typeof item[key] !== 'string' && typeof item[key] !== 'number'){
          for (let child of item[key]) {
            let newPivot = {
              headerText: child,
              itemKey: child.replace(" ", ""),
              filter: child,
            };
            if (headers.indexOf(child) < 0 ) { result.push(newPivot); headers.push(child); }
          }
        } else {
          let newPivot = {
            headerText: item[key],
            itemKey: item[key].replace(" ", ""),
            filter: item[key],
          };
          if (headers.indexOf(item[key]) < 0 ) { result.push(newPivot); headers.push(item[key]); }
        }
      }
    }
    return result;
  }

  public constructor(props:ISocialiis7Props){
    super(props);

    this.onNavClick = this.onNavClick.bind(this);

    let topics : ITopics = this.props.topics;

    let currentPivotSet = "keysForTopic";

    let loadData: ILoadData = this.rebuildNonListEntities();
    loadData = this._rebuildEntities(topics, loadData);

    let selectedEntity = loadData.subTopic1Entities[0];
    let selectedNavItem = loadData.subTopic1Entities[0] ? loadData.subTopic1Entities[0].navigation[0] : null;

    let localListLoaded = this.props.useLocalList && this.props.localListURL.length > 0 ? false : true;
    let masterListLoaded = this.props.useMasterList && this.props.masterListURL.length > 0 ? false : true;
    let allLoaded = ( localListLoaded && masterListLoaded ) ? true : false;

    let pivots : IMyPivots = null;
    let currentPivots : IPivot[][] =  null;
    if ( allLoaded ) {
      pivots = this._rebuildPivots(loadData);
      currentPivots = [pivots.subTopic1Titles,pivots.subTopic2Titles,pivots.subTopic3Titles];
    }

    this.state = { 
//      sourceListName: "",
      //Size courtesy of https://www.netwoven.com/2018/11/13/resizing-of-spfx-react-web-parts-in-different-scenarios/
      WebpartHeight: this.props.WebpartElement.getBoundingClientRect().height ,
      WebpartWidth:  this.props.WebpartElement.getBoundingClientRect().width - 50 ,

      showTips: selectedEntity == null ? "yes" : "none",
      searchShow: false,
      description: "desc goes here",
      pivots: pivots,
      selectedMedia: '',
      loadStatus: "loading",
      currentPivotSet: currentPivotSet,
      currentPivots: currentPivots,
      selectedEntity: selectedEntity,
      selectedNavItem: selectedNavItem,
      navigationType: this.props.navigationType,
      topics: topics,
      selectedNavKey: selectedEntity ? 'public constructor: ' + selectedEntity.titleKey : "None available",
      loadData: loadData,
      endTime: null,
      lastEvent: allLoaded ? 'Constructor' : 'Not Loaded',
      hardCodedLoaded: true,
      localListLoaded: localListLoaded,
      masterListLoaded: masterListLoaded,
      allLoaded: allLoaded,
      loadOrder: ['Constructor'],
      setLayout: 'this.props.setSize',
      
    };

    this.toggleTips = this.toggleTips.bind(this);
    this.searchMe = this.searchMe.bind(this);
    this.toggleLayout = this.toggleLayout.bind(this);
    this.minimize = this.minimize.bind(this);

    /*

      toggleTips?: (item?: any, ev?: React.MouseEvent<HTMLElement>) => void;
      searchMe?: (item?: any, ev?: React.MouseEvent<HTMLElement>) => void;
      toggleLayout?: (item?: any, ev?: React.MouseEvent<HTMLElement>) => void;


      this.onLinkClick = this.onLinkClick.bind(this);
      this.toggleTips = this.toggleTips.bind(this);
      this.minimizeTiles = this.minimizeTiles.bind(this);
      this.searchMe = this.searchMe.bind(this);
      this.showAll = this.showAll.bind(this);
      this.toggleLayout = this.toggleLayout.bind(this);
      this.onChangePivotClick = this.onChangePivotClick.bind(this);
    */

  }

  public componentDidMount() {
    //let items = this._getListItems();
    //console.log('items:', items);

    this.setState({
      endTime: this.state.endTime ? this.state.endTime : getTheCurrentTime(),
    });

  }
  
  public componentDidUpdate(prevProps){
/*
*/
    let rebuildPivots = false;
    if (this.props.topics !== prevProps.topics) {  rebuildPivots = true ; }

    if (rebuildPivots === true) {
      this._updateStateOnPropsChange({}, null);
    }

  }

  public createCommandBarObject(){
    let tipError = false;
    if (this.state.itemsError || this.state.listError ){ tipError = true; }

    let commandPart = 
      <MyCommandBar
          toggleTips= { this.toggleTips }
          searchMe= { this.searchMe.bind(this) }
          //showAll= { this.showAll.bind(this) }
          toggleLayout= { this.toggleLayout.bind(this) }
          commandClass = {(tipError ? 'warnTips' : '') }
          minimize = { this.minimize.bind(this) }
          setLayout = { this.state.setLayout }
          topics= { this.state.topics }
        />;

      return commandPart;
  }

  public createPivotObject(currentPivots: IPivot[][], display){
    if (currentPivots == null) { return '';}
    if (currentPivots.length === 0) { return '';}

    //let setPivot = pivots[0].headerText;
    let pivotPart = 
    <Pivot 
      style={{ flexGrow: 1, paddingLeft: '10px', display: display }}
      linkSize= { pivotOptionsGroup.getPivSize(this.props.pivotSize) }
      linkFormat= { pivotOptionsGroup.getPivFormat(this.props.pivotFormat) }
      onLinkClick= { this.onLinkClick.bind(this) }  //{this.specialClick.bind(this)}
      //selectedKey={ setPivot }
      headersOnly={true}>
        {this.createPivots(currentPivots[0] , this.props)}
        {this.createPivots(this.state.pivots.spacers , this.props)}
        {this.createPivots(currentPivots[1] , this.props)}
        {this.createPivots(this.state.pivots.spacers , this.props)}
        {this.createPivots(currentPivots[2] , this.props)}
    </Pivot>;
    return pivotPart;
  }

  public render(): React.ReactElement<ISocialiis7Props> {

    if ( this.state.allLoaded ) { saveAnalytics(this.props,this.state, 'No Error', 'Public Render'); }
    console.log('Public Render: ', this.props, this.state, this.context);
    
    /**
     * this section was added to keep pivots in sync when syncProjectPivotsOnToggle === true
     */

    let display1 = this.state.loadStatus !== 'xyz' ? "block" :"none";
    let display2 = this.state.loadStatus !== 'xyz' ? "block" :"none";
    let choice1 = this.state.loadStatus;
    let choice2 = this.state.loadStatus;

    let entryOptions = this.props.navigationType === 'choice' ? choiceBuilders.creatEntryTypeChoices(this.props,this.state, this._updateEntryType.bind(this)) : '';
    const stackFormRowsTokens: IStackTokens = { childrenGap: 10 };
    const stackFormHeaderTokens: IStackTokens = { childrenGap: 5 };    

    let aboutMe: React.ReactElement<IAboutInfoProps > = React.createElement(
      AboutInfo,
      {
        parentProps: this.props,
        parentState: this.state,
      }
    );

    const leftNavigation: React.ReactElement<IPageNavigatorProps > = React.createElement(
      PageNavigator,
      {
        description: 'Social Footprint',
        //Why do I get an error here every time?
        //selectedKey: 'x',
        selectedNavKey: this.state.selectedNavKey,
        selectedEntityString: this.state.selectedEntity ? this.state.selectedEntity.titleKey : "None available",
        anchorLinks: (this.state.selectedEntity ? this.state.selectedEntity.navigation : []),
      }
    );

    //Error Messages imported from PivotTiles
    let listBuild = this.state.searchShow 
        ? listBuilders.listViewBuilder(this.props,this.state,this.state.loadData.allEntities)
        : "";

    let buildTips = myErrors.buildTips(this.props,this.state);
    let noListFound = myErrors.NoListFound(this.props,this.state);
    let noItemsFound = myErrors.NoItemsFound(this.props,this.state);
    let loadingSpinner = myErrors.LoadingSpinner(this.state);

    let NoItemsForTopics = myErrors.NoItemsForTopics(this.props, this.state);
    let showTopics = this.state.selectedEntity == null ? "yes" : this.state.showTips;
    let WebpartWidth = this.state.WebpartWidth.toString();
    return (

      <div className={ styles.socialiis7 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
          <div className={styles.floatLeft}>

            <Stack horizontal={false} horizontalAlign={"space-between"} tokens={stackFormHeaderTokens}>{/* Stack Command and Pivot area */}
              <div style={{width: `${WebpartWidth}px` }}></div>
              { this.createCommandBarObject()  }
              { ( NoItemsForTopics )}
              { ( showTopics === "yes" ? ( buildTips ) : "" ) }
              { ( listBuild ) }
              
              { this.createPivotObject(this.state.currentPivots, display1)  }

            </Stack>

          </div>
          <Stack horizontal={true} horizontalAlign={"space-between"} tokens={stackFormRowsTokens}>{/* Stack for Buttons and Fields */}

          { ( this.props.navigationType === 'choice' ? entryOptions : leftNavigation ) }
            <div className={ styles.column } style={{paddingLeft: 50, minWidth: 700}}>
              <div className={ styles.description }>
                { aboutMe }
              </div>
            </div>
            </Stack>  {/* Stack for Buttons and Fields */}


          </div>



          <div className={styles.tableRow}>
            { ( loadingSpinner ) }
            { ( noListFound )}
            { ( noItemsFound )}

          </div>
        </div>
      </div>
    );
  }

  private _updateStateOnPropsChange(params: any , newTopics : string): void {

    let topics : ITopics = this.props.topics;
    let newCurrent : any = 0;
    let redoTopics : string[] = this.props.topics.toggleDef.split(';');


    if ( newTopics == null ) { 
      
    } else if ( newTopics === 'toggle' ) { 

      newCurrent = this.getFirstEmptyTopic(this.props.topics ) > this.state.topics.current + 1 ? this.state.topics.current + 1 : 0 ;
      console.log('newCurrent', newCurrent);
      redoTopics = this.props.topics['toggle' + newCurrent].split(';');
      topics.current = newCurrent;

    } else if (newTopics.toString().toLowerCase() === 'random' ) { 


    } else if (newTopics.length  > 0 ) { 
      redoTopics = newTopics.split(';');
      
    }

    topics.mainTopic = redoTopics[0] == null ? '' : redoTopics[0] ;
    topics.subTopic1 = redoTopics[1] == null ? '' : redoTopics[1] ;
    topics.subTopic2 = redoTopics[2] == null ? '' : redoTopics[2] ;
    topics.subTopic3 = redoTopics[3] == null ? '' : redoTopics[3] ;

    this.onNavClick = this.onNavClick.bind(this);

    let currentPivotSet = "keysForTopic";

    let loadData: ILoadData = this.rebuildNonListEntities();
    loadData = this._rebuildEntities(topics, loadData);

    let selectedEntity = loadData.subTopic1Entities[0];
    let selectedNavItem = loadData.subTopic1Entities[0] ? loadData.subTopic1Entities[0].navigation[0] : null;

    let pivots : IMyPivots = this._rebuildPivots(loadData);

    let currentPivots : IPivot[][] = [pivots.subTopic1Titles,pivots.subTopic2Titles,pivots.subTopic3Titles];


    //https://stackoverflow.com/a/43363105/4210807 - Get sum of array items
    let entArrays = currentPivots == null ? [] : currentPivots.map(pivs => { return pivs.length; } );
    let entCount = entArrays.reduce((a,b) => a + b,0);
    console.log('noEntitiesFound',entArrays, entCount);

    let localListLoaded = this.props.useLocalList && this.props.localListURL.length > 0 ? false : true;
    let masterListLoaded = this.props.useMasterList && this.props.masterListURL.length > 0 ? false : true;
    let allLoaded = ( localListLoaded && masterListLoaded ) ? true : false;

    let loadOrder: string[] = this.state.loadOrder;
    loadOrder.push('PropsChange');

    this.setState({
      WebpartHeight: this.props.WebpartElement.getBoundingClientRect().height,
      WebpartWidth:  this.props.WebpartElement.getBoundingClientRect().width - 50 ,
      pivots: pivots,
      selectedMedia: '',
      loadStatus: entCount === 0 ? "NoItemsForTopics" : "updating Props",
      currentPivotSet: currentPivotSet,
      currentPivots: currentPivots,
      selectedEntity: selectedEntity,
      selectedNavKey: selectedEntity ? '_updateStateOnPropsChange: ' + selectedEntity.titleKey : "None available",
      loadData: loadData,
      selectedNavItem: selectedNavItem,
      navigationType: this.props.navigationType,
      endTime: this.state.endTime ? this.state.endTime : getTheCurrentTime(),
      topics: topics,
      lastEvent: 'Props Change',
      hardCodedLoaded: true,
      localListLoaded: localListLoaded,
      masterListLoaded: masterListLoaded,
      allLoaded: allLoaded,
      loadOrder: loadOrder,
      
    });

  }

  private getFirstEmptyTopic(getTopics: ITopics) {

    if (getTopics.toggle0 == "") { return 0; }
    if (getTopics.toggle1 == "") { return 1; }
    if (getTopics.toggle2 == "") { return 2; }
    if (getTopics.toggle3 == "") { return 3; }
    if (getTopics.toggle4 == "") { return 4; }
    return 5;
  }



  private rebuildNonListEntities() {

    this.onNavClick = this.onNavClick.bind(this);

    let topics : ITopics = this.props.topics;

    let Entities1 = buildEntities(this.onNavClick);
    let Entities2 = buildEntities2(this.onNavClick);
    let Entities4 = buildEntities4(this.onNavClick);
    let Entities7 = buildEntities7(this.onNavClick);
    let Entities8 = buildEntities8(this.onNavClick);
    let Entities9 = buildEntities9(this.onNavClick);    

    let testUserEntities1 = IsValidJSONString(this.props.userEntities1);
    let testUserEntities2 = IsValidJSONString(this.props.userEntities2);
    let testUserEntities3 = IsValidJSONString(this.props.userEntities3);

    let userEntities1 = testUserEntities1 ? buildUserEntities(this.onNavClick, this.props.userEntities1,'User Props 1') : [];
    let userEntities2 = testUserEntities2 ? buildUserEntities(this.onNavClick, this.props.userEntities2,'User Props 2') : [];
    let userEntities3 = testUserEntities3 ? buildUserEntities(this.onNavClick, this.props.userEntities3,'User Props 3') : [];

    /*
    listEntites: listEntites,
    entityTitles: entityTitles,
    */

    let allEntities = Entities1.concat(Entities2).concat(Entities4).concat(Entities7).concat(Entities9).concat(Entities8).concat(userEntities1);
    allEntities = allEntities.concat(userEntities1).concat(userEntities2).concat(userEntities3);

    let loadData: ILoadData = {

      Entities1: Entities1,
      Entities2: Entities2,
      Entities4: Entities4,
      Entities7: Entities7,
      Entities9: Entities9,
      userEntities1: userEntities1,
      userEntities2: userEntities2,
      userEntities3: userEntities3,

      allEntities: allEntities,
      allEntityKeywords: buildEntityKeywords(allEntities, "keywords"),
      allTopics: buildEntityKeywords(allEntities, "keywords"),

      entitiesForMainTopic: [],
      availSubTopicEntities: [],
      keysForTopic: [],

      subTopic1Entities: null,
      subTopic2Entities: null,
      subTopic3Entities: null,

    };

    let localListLoaded = this.props.useLocalList ? false : true;
    let masterListLoaded = this.props.useMasterList ? false : true;

    if ( !localListLoaded ) { this._getListItems('local'); }
    if ( !masterListLoaded ) { this._getListItems('master'); }

    return loadData;

  }




  private _rebuildEntities(topics: ITopics, loadData1: ILoadData ) {

    let loadData: ILoadData = cloneDeep(loadData1);

    loadData.entitiesForMainTopic = getEntitiesForThis(loadData.allEntities, "keywords",topics.mainTopic);
    loadData.availSubTopicEntities = cloneDeep(loadData.entitiesForMainTopic);
    loadData.subTopic1Entities = getEntitiesForThis(loadData.entitiesForMainTopic, "keywords", topics.subTopic1);

    //This loop removes entities from what is available for the next section so pivots are not duplicated.
    //https://stackoverflow.com/questions/47017770/remove-array-of-objects-from-another-array-of-objects/47017949
    loadData.availSubTopicEntities =  loadData.availSubTopicEntities.filter( 
      x => !loadData.subTopic1Entities.filter( y => y.Title === x.Title).length);

    loadData.subTopic2Entities = getEntitiesForThis(loadData.availSubTopicEntities, "keywords", topics.subTopic2);

    //This loop removes entities from what is available for the next section so pivots are not duplicated.
    //https://stackoverflow.com/questions/47017770/remove-array-of-objects-from-another-array-of-objects/47017949
    loadData.availSubTopicEntities =  loadData.availSubTopicEntities.filter( 
      x => !loadData.subTopic2Entities.filter( y => y.Title === x.Title).length);

    loadData.subTopic3Entities = getEntitiesForThis(loadData.availSubTopicEntities, "keywords", topics.subTopic3);
    loadData.keysForTopic = buildEntityKeywords(loadData.entitiesForMainTopic, "keywords");


    return loadData;

  }

  private _rebuildPivots(loadData: ILoadData ) {

    let pivots : IMyPivots = {
      allTopics: this.createPivotData(loadData.allTopics, null),
      allEntityKeywords: this.createPivotData(loadData.entitiesForMainTopic, 'keywords'),
      keysForTopic:this.createPivotData(loadData.keysForTopic, null),
      subTopic1Titles: this.createPivotData(loadData.subTopic1Entities, 'Title'),
      subTopic2Titles: this.createPivotData(loadData.subTopic2Entities, 'Title'),
      subTopic3Titles: this.createPivotData(loadData.subTopic3Entities, 'Title'),
      entTitlesForTopics: [],
      spacers: this.createPivotData([" "], null),
    };

    return pivots;

  }


  private _updateEntryType(ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption){

    console.log('_updateEntryType: ev', ev);

    let selectedMedia = option.key;

    this.setState({ 
      selectedMedia: selectedMedia,
     });
  }


  public onLinkClick = (item): void => {
    //This sends back the correct pivot category which matches the category on the tile.
    let e: any = event;

    if (e.ctrlKey) {
      //Set clicked pivot as the hero pivot


    } else if (e.altKey) {
      //Enable-disable ChangePivots options
      /*
      this.setState({
        
      });
      */

    } else {

     
      let thisFilter = [];
      let pivots = this.state.pivots.allTopics;  
      let selectedEntity : IEntity = null;
      for (let entity of this.state.loadData.entitiesForMainTopic){

        if ( entity.Title === item.props.headerText ) {
          selectedEntity = entity;
        }

      }

      let selectedNavItem = selectedEntity.navigation[0];

      this.setState({
        selectedEntity: selectedEntity,
        selectedNavKey: selectedEntity.navigation.length > 0 ? selectedEntity.navigation[0].key : selectedEntity.titleKey,
        selectedNavItem: selectedNavItem,
        lastEvent: 'Entity Click',
      });

    }

  } //End onClick

  public onNavClick = (ev?: React.MouseEvent<HTMLElement>, item?: INavLink): void => {
    //This sends back the correct pivot category which matches the category on the tile.

    let e: any = ev;

    let thisEntityKey = item.key.split('||||')[0];
    let selectedEntity : IEntity = null;

    let selectedNavItem = null;

    for (let ent of this.state.loadData.entitiesForMainTopic) {
      if (ent.titleKey === thisEntityKey) { 
        selectedEntity = ent;
      }
    }

   for (let nav of selectedEntity.navigation) {
    if (nav.key === item.key) { 
      selectedNavItem = nav;
    }
  }

  console.log('Test Nav', selectedNavItem.mediaSource, this.props.pageType);

  if (selectedNavItem.mediaSource === 'office365' && this.props.pageType === 'SharePoint' ) {
    //Do default if the media source is office365 and page type is on SharePoint.
    //Testing has shown that without this, when you click on a nav link in SharePoint it loads that page.
    ev.preventDefault(); // Let's stop this event.
    e.preventDefault(); // Let's stop this event.

  } else if (selectedNavItem.mediaSource === 'office365' && this.props.pageType.indexOf('Workbench') > -1 ) {
    //Do default if the media source is office365 and page type is on SharePoint.
    //Testing has shown that without this, when you click on a nav link in SharePoint it loads that page.
    ev.preventDefault(); // Let's stop this event.
    e.preventDefault(); // Let's stop this event.

  } else {
    //Need to not do this if it's in SharePoint
    ev.preventDefault(); // Let's stop this event.
    e.preventDefault(); // Let's stop this event.

  }

    //This is done to confirm that the "Share Info" button was clicked
    if ( item.key.indexOf('debug') > -1 ) { item.key = item.key.replace('debug','showDebug');}

    if (ev.ctrlKey) {
      //Set clicked pivot as the hero pivot
        let openThisWindow = item.url;
        window.open(openThisWindow, '_blank');
        this.setState({
          selectedEntity : selectedEntity,
          selectedNavKey : item.key,
          selectedNavItem : selectedNavItem,
          lastEvent: 'Nav Click',
        });


    } else if (ev.altKey) {
      //Enable-disable ChangePivots options
      /*
      this.setState({
        
      });
      */

    } else {

      this.setState({
        selectedEntity : selectedEntity,
        selectedNavKey : item.key,
        selectedNavItem : selectedNavItem,
        lastEvent: 'Nav Click',
      });

    }

  } //End onNavClick

//  private _getListItems(): void {
  //https://sympmarc.com/2018/12/12/using-pnpjs-and-async-await-to-really-simplify-your-api-calls/
  private async _getListItems(localOrMaster: string): Promise<void> {

    let useThisList: Boolean = null;
    let thisListURL: string = null;
    let thisListFilter: string = "";

    if (localOrMaster == 'local') {
      thisListURL = this.props.localListURL;
      thisListFilter = this.props.localListFilter;
      useThisList = this.props.useLocalList;

    } else if ( localOrMaster == 'master' ) {
      thisListURL = this.props.masterListURL ;
      thisListFilter = this.props.masterListFilter;
      useThisList = this.props.useMasterList;

    }

    if (thisListURL == null ) { thisListURL = ''; }
    if (thisListFilter == null ) { thisListFilter = ''; }

    //Remove tenanat URL from list URL
    if ( useThisList && thisListURL ) {
      thisListURL = thisListURL.replace(this.props.tenant,'');
    }

    //const fixedURL = Utils.fixURLs(this.props.listWebURL, this.props.pageContext);
    let selectCols: string = "*";

    let thisSort: string = "Title";
    let thisSort2: string = "order0";
    let items;
    let entityTitles: string[] = [];
    let listEntites : IEntity[]= [];

    let theseEntities : IListEntities = {
      listEntites: listEntites,
      entityTitles: entityTitles,
    };

    if ( thisListURL.length > 0 ) {
      try {

        items = await sp.web.getList(thisListURL).items.filter(thisListFilter).orderBy(thisSort,true).orderBy(thisSort2,true).get();

        let newEntity: IEntity = null;
        let count = -1;
        let entityKeys = [];
        for (var j = 0; j < items.length; j++){
          let thisItem = items[j];
          if (entityTitles.indexOf(thisItem.Title) < 0 ) { 

            let keywords = thisItem.keywords == null ? [] : thisItem.keywords.split(';');
            
            entityTitles.push(thisItem.Title);
            newEntity = {
              Title: thisItem.Title,
              keywords: keywords,
              keywordsText: thisItem.keywords,

              profilePic: thisItem.profilePic,
            };
            count ++;
            entityKeys = [];
            listEntites.push(newEntity);

          }

          let obj = getPropsFromObjectInfo(thisItem.NavTitle, thisItem.mediaSource,thisItem.objectType, thisItem.objectID, thisItem.url);

          if (obj.mediaSource && obj.mediaSource.length > 0) {

            let thisNavItem = {
              NavTitle: obj.NavTitle,
              url: obj.url,
              objectType: obj.objectType,
              objectID: obj.objectID,
              mediaSource: obj.mediaSource,
            };

            let isCompleteNavItem = true;
            if ( obj.mediaSource === "" ) { isCompleteNavItem = false; }
            if ( obj.NavTitle === "" ) { isCompleteNavItem = false; }
            if ( obj.url === "" && obj.objectID === "" ) { isCompleteNavItem = false; }

            if ( isCompleteNavItem === true ) {

              if ( NonArrayNodes.indexOf(obj.mediaSource) < 0 ) {
                //These have arrays of objects in them
    
                //If key (mediaSource) does not yet exist, add
                if (entityKeys.indexOf(obj.mediaSource) < 0 ) { 
                  //Key does not yet exist... Add key
                  listEntites[count][obj.mediaSource] = null;
                  entityKeys.push(obj.mediaSource);
                }
    
                if (obj.mediaSource === 'youtube') {//youtube object has items key which is an array
                  if (listEntites[count][obj.mediaSource] == null) { 
                    listEntites[count][obj.mediaSource] = {
                      NavTitle: '',
                      user: '',
                      items: []
                    };              
                  }
                  listEntites[count][obj.mediaSource]['items'].push(thisNavItem);
    
                } else { //other mediaSources are just an array
                  if (listEntites[count][obj.mediaSource] == null) { listEntites[count][obj.mediaSource] = []; }
                  listEntites[count][obj.mediaSource].push(thisNavItem);
    
                }
    
              } else { // These are single layer deep
                listEntites[count][obj.mediaSource] = thisNavItem;
    
              }
            }
            //asdfasdf
          }

        }

        let completeListEntites = [];
        
        for (let ent1 of listEntites ){
          let newEnt = addOtherProps(ent1,this.onNavClick, localOrMaster + ' List' );
          completeListEntites.push(newEnt);

        }

        theseEntities = {
          listEntites: completeListEntites,
          entityTitles: entityTitles,
        };

        //At this point we should update state, rebuild pivots etc...

        this._saveListItemsToState( localOrMaster, theseEntities );

      } catch (e) {
        saveAnalytics(this.props,this.state, 'Load ' + localOrMaster + ' Error', 'Load List Error');
        console.error('load error');
        console.error(e);

      }
    }

  }

  private _saveListItemsToState (localOrMaster: string, theseEntities: IListEntities){

   let topics : ITopics = this.props.topics;
   let currentPivotSet = "keysForTopic";

   let pivots : IMyPivots = null;
   let currentPivots : IPivot[][] =  null;
   let loadData = this.state.loadData;
   
   let localListLoaded = this.props.useLocalList && this.props.localListURL.length > 0 ? false : true;
   let masterListLoaded = this.props.useMasterList && this.props.masterListURL.length > 0 ? false : true;

   if (localOrMaster === 'master') { 
     masterListLoaded = true; 
     loadData.masterEntities = theseEntities.listEntites;
     loadData.masterEntityTitles = theseEntities.entityTitles;
    }
   if (localOrMaster === 'local') { 
     localListLoaded = true; 
     loadData.localEntities = theseEntities.listEntites;
     loadData.localEntityTitles = theseEntities.entityTitles;
    }

   let allLoaded = ( localListLoaded && masterListLoaded ) ? true : false;

   loadData.allEntities = loadData.allEntities.concat(theseEntities.listEntites);


   loadData = this._rebuildEntities(topics, loadData);

   loadData.allEntityKeywords = buildEntityKeywords(loadData.allEntities, "keywords");
   loadData.allTopics = buildEntityKeywords(loadData.allEntities, "keywords");

   let selectedEntity = loadData.subTopic1Entities[0];
   let selectedNavItem = loadData.subTopic1Entities[0] ? loadData.subTopic1Entities[0].navigation[0] : null;

   if ( allLoaded ) {
     pivots = this._rebuildPivots(loadData);
     currentPivots = [pivots.subTopic1Titles,pivots.subTopic2Titles,pivots.subTopic3Titles];
   }

   let entArrays = currentPivots == null ? [] : currentPivots.map(pivs => { return pivs.length; } );
   let entCount = entArrays.reduce((a,b) => a + b,0);
   console.log('noEntitiesFound',entArrays, entCount);

   let loadOrder: string[] = this.state.loadOrder;
   loadOrder.push(localOrMaster);

   this.setState({
     pivots: pivots,
     WebpartWidth:  this.props.WebpartElement.getBoundingClientRect().width - 50 ,
     selectedMedia: '',
     loadStatus: entCount > 0 ? "updating list Entities" : "NoItemsForTopics",
     currentPivotSet: currentPivotSet,
     currentPivots: currentPivots,
     selectedEntity: selectedEntity,
     selectedNavKey: selectedEntity ? '_updateStateOnPropsChange: ' + selectedEntity.titleKey : "None available",
     loadData: loadData,
     selectedNavItem: selectedNavItem,
     endTime: this.state.endTime ? this.state.endTime : getTheCurrentTime(),
     topics: topics,
     lastEvent: 'Loaded ' + localOrMaster,
     localListLoaded: localListLoaded,
     masterListLoaded: masterListLoaded,
     allLoaded: allLoaded,
     loadOrder: loadOrder,
   });


  }
  //http://react.tips/how-to-create-reactjs-components-dynamically/ - based on createImage
  public createPivot(pivT: IPivot) {

    return (
      <PivotItem 
        headerText={pivT.headerText} 
        itemKey={pivT.itemKey}
      >
      </PivotItem>
    );
  }

  public createPivots(pivots: IPivot[], thisProps: ISocialiis7Props){
    let piv2 = pivots.map(this.createPivot);
    return (
      piv2
    );
  }

  private minimize = (item: PivotItem): void => {
    //This sends back the correct pivot category which matches the category on the tile.
    let e: any = event;
    console.log(e);
    if (e.altKey && e.shiftKey && !e.ctrlKey) { 

    } else if (e.ctrlKey) { 

    } else {
      let newFilteredTiles = [];

      this.setState({
        searchCount: 0, //this.state.allTiles.length,
        showTips: 'none',
        searchShow: false,

      });
    }
    


  } //End onClick
  
  public toggleLayout = (item: any): void => {
    //This sends back the correct pivot category which matches the category on the tile.
    console.log('toggleLayout');

    let e: any = event;
    console.log(e);
    if (e.altKey && e.shiftKey && !e.ctrlKey) { 

    } else if (e.ctrlKey) { 
      this._updateStateOnPropsChange({}, '');
    } else {
      this._updateStateOnPropsChange({}, 'toggle');

    }
  } //End toggleTips  

  public toggleTips = (item: any): void => {
    //This sends back the correct pivot category which matches the category on the tile.

    let newshowTips = this.state.showTips === 'none' ? 'yes' : 'none';

    this.setState({
      showTips: newshowTips,
    });

  } //End toggleTips  

  private searchMe = (item: PivotItem): void => {
    //This sends back the correct pivot category which matches the category on the tile.
    let e: any = event;
    console.log(e);
    let searchType = "";
    let newSearchShow =  e.altKey === true ? true : !this.state.searchShow;
    let searchCount = 0; //this.state.lastFilteredTiles.length;
    let searchWhere = this.state.searchWhere;
    if (e.altKey) { 
      searchType = "all";
      newSearchShow = true;
      searchCount = 0; //this.state.allTiles.length;
      searchWhere = ' in all categories';
    }
    
    console.log('newSearchShow: ', newSearchShow, searchType);
    this.setState({
      searchType: searchType,
      searchShow: ( e.altKey === true ? true : !this.state.searchShow ),
      searchCount: searchCount,
      searchWhere: searchWhere,
    });

    
  } //End searchMe

}

//   SPFxYouTubeTesting:  AIzaSyD6O2VK5QY_NY2UbNINCM-VDjmth2NRU3U