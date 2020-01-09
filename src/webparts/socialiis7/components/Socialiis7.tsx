import * as React from 'react';
import styles from './Socialiis7.module.scss';
import { ISocialiis7Props, IEntity } from './ISocialiis7Props';
import { escape } from '@microsoft/sp-lodash-subset';

import { Pivot, PivotItem, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import { IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { DefaultButton, autobind, getLanguage, ZIndexes } from 'office-ui-fabric-react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

import { pivotOptionsGroup, } from '../../../services/propPane';
import {IUser, ISocialiis7State, IMyPivots, IPivot,} from './ISocialiis7State';

import { CompoundButton, Stack, IStackTokens, elementContains } from 'office-ui-fabric-react';

import {
  buildEntities,buildEntityKeywords, getEntitiesForThis

} from './Entities1/1EntityBuilder';
import {  buildEntities2} from './Entities2/1EntityBuilder';
import {  buildEntities4} from './Entities4/1EntityBuilder';
import {  buildEntities7} from './Entities7/1EntityBuilder';
import {  buildEntities9} from './Entities9/1EntityBuilder';

import * as choiceBuilders from './choiceFieldBuilder';

import PageNavigator from './Navigator/PageNavigator';
import { IPageNavigatorProps } from './Navigator/IPageNavigatorProps';

//import AboutMe from './AboutMe/AboutMe';

/**
 * Typical Youtube embed
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/ddPWBxh6EX4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 * 
 * frameborder="0" has to be removed.
 * allowfullscreen has to be removed but you can add "; fullscreen" into the allow= string
 * 
 * working example:
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/ddPWBxh6EX4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
 * 
 */

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
    let currentPivotSet = "keysForTopic";
    let mainTopic = "SharePoint";
    let subTopic1 = "SIG";
    let subTopic2 = "MSFT";
    let subTopic3 = "MVP";
/*
    mainTopic = "Auto";
    subTopic1 = "OEM";
    subTopic2 = "Passive";
    subTopic3 = "Active";
*/
    let Entities1 = buildEntities();
    let Entities2 = buildEntities2();
    let Entities4 = buildEntities4();
    let Entities7 = buildEntities7();
    let Entities9 = buildEntities9();    
    
    let allEntities = Entities1.concat(Entities2).concat(Entities4).concat(Entities7).concat(Entities9);
    let allEntityKeywords = buildEntityKeywords(allEntities, "keywords");
    let allTopics = buildEntityKeywords(allEntities, "keywords");
    let entitiesForMainTopic = getEntitiesForThis(allEntities, "keywords",mainTopic);
    let subTopic1Entities = getEntitiesForThis(entitiesForMainTopic, "keywords", subTopic1);
    let subTopic2Entities = getEntitiesForThis(entitiesForMainTopic, "keywords", subTopic2);
    let subTopic3Entities = getEntitiesForThis(entitiesForMainTopic, "keywords", subTopic3);
    let keysForTopic = buildEntityKeywords(entitiesForMainTopic, "keywords");

    let selectedEntity = subTopic1Entities[0];

    let pivots : IMyPivots = {
      allTopics: [],
      allEntityKeywords: [],
      keysForTopic: [],
      subTopic1Titles: [],
      subTopic2Titles: [],
      subTopic3Titles: [],
      entTitlesForTopics: [],
      spacers: [],
    };

    pivots.allTopics = this.createPivotData(allTopics, null);
    pivots.keysForTopic = this.createPivotData(keysForTopic, null);
    pivots.allEntityKeywords = this.createPivotData(entitiesForMainTopic, 'keywords');
    pivots.entTitlesForTopics = this.createPivotData(entitiesForMainTopic, 'title');

    pivots.subTopic1Titles = this.createPivotData(subTopic1Entities, 'title');
    pivots.subTopic2Titles = this.createPivotData(subTopic2Entities, 'title');
    pivots.subTopic3Titles = this.createPivotData(subTopic3Entities, 'title');

    pivots.spacers =  this.createPivotData([" "], null);

    let currentPivots : IPivot[][] = [pivots.subTopic1Titles,pivots.subTopic2Titles,pivots.subTopic3Titles];

    this.state = { 
      sourceListName: "Something",
      description: "desc goes here",
      pivots: pivots,
      selectedMedia: '',
      loadStatus: "loading",
      currentPivotSet: currentPivotSet,
      currentPivots: currentPivots,
      selectedEntity: selectedEntity,
      navigationType: this.props.navigationType,
      loadData: {
        mainTopic: mainTopic,
        subTopic1: subTopic1,
        subTopic1Entities: subTopic1Entities,
        subTopic2: subTopic2,
        subTopic2Entities: subTopic2Entities,
        subTopic3: subTopic3,
        subTopic3Entities: subTopic3Entities,
        Entities1: Entities1,
        Entities2: Entities2,
        Entities4: Entities4,
        Entities7: Entities7,
        Entities9: Entities9,
        allEntities: allEntities,
        allEntityKeywords: allEntityKeywords,
        allTopics: allTopics,
        entitiesForMainTopic: entitiesForMainTopic,
        keysForTopic: keysForTopic,
        topicKeys: [],
      },

    };

    // because our event handler needs access to the component, bind 
    //  the component to the function so it can get access to the
    //  components properties (this.props)... otherwise "this" is undefined

    /*
    this.onLinkClick = this.onLinkClick.bind(this);
    */
    
  }

  public componentDidMount() {
    //this._getListItems();
    
  }
  
  public componentDidUpdate(prevProps){
/*
    let rebuildTiles = false;
    if (this.props.defaultProjectPicker !== prevProps.defaultProjectPicker) {  rebuildTiles = true ; }

    if (rebuildTiles === true) {
      this._updateStateOnPropsChange({});
    }
*/
  }

  public createPivotObject(currentPivots: IPivot[][], display){

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
    console.log('Public Render: this.state', this.state);

    /**
     * this section was added to keep pivots in sync when syncProjectPivotsOnToggle === true
     */

    let display1 = this.state.loadStatus !== 'xyz' ? "block" :"none";
    let display2 = this.state.loadStatus !== 'xyz' ? "block" :"none";
    let choice1 = this.state.loadStatus;
    let choice2 = this.state.loadStatus;

    let entryOptions = choiceBuilders.creatEntryTypeChoices(this.props,this.state, this._updateEntryType.bind(this));
    const stackFormRowsTokens: IStackTokens = { childrenGap: 10 };
    
    let aboutMe =  null;
    /*
    if ( this.state.navigationType === 'asdfasdf' ) {
        aboutMe = 
        <AboutMe
          imageUrl={this.state.selectedEntity.profilePic}
          setImgCover='centerContain'
          setImgFit='portrait'
        >
      </AboutMe>
    }
    */

    /*
    if (this.state.syncProjectPivotsOnToggle){
      display1 = "block";
      display2 = "none";
      choice1 = this.state.projectMasterPriorityChoice;
      choice2 = this.state.projectMasterPriorityChoice;
    }
*/

    /*
        */
    const leftNavigation: React.ReactElement<IPageNavigatorProps > = React.createElement(
      PageNavigator,
      {
        description: 'Social Footprint',
        //Why do I get an error here every time?
        //selectedKey: 'x',
        anchorLinks: this.state.selectedEntity.navigation,
      }
    );

    return (
      <div className={ styles.socialiis7 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
          <div className={styles.floatLeft}>
          { this.createPivotObject(this.state.currentPivots, display1)  }
          </div>
          <Stack horizontal={true} horizontalAlign={"end"} tokens={stackFormRowsTokens}>{/* Stack for Buttons and Fields */}

          { ( this.props.navigationType === 'choice' ? entryOptions : leftNavigation ) }
            <div className={ styles.column }>
              { aboutMe }
              <span className={ styles.title }>{this.state.selectedEntity.title}</span>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ddPWBxh6EX4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
                
              </a>
            </div>
            </Stack>  {/* Stack for Buttons and Fields */}


          </div>
          <div className={ styles.description }>
            { (JSON.stringify(this.state.selectedEntity.navigation ))  }
          </div>

        </div>
      </div>
    );
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



      console.log('onLinkClick: this.state', this.state);
      console.log('onLinkClick: item', item);
      
      let thisFilter = [];
      let pivots = this.state.pivots.allTopics;  
      let selectedEntity : IEntity = null;
      for (let entity of this.state.loadData.entitiesForMainTopic){
        if ( entity.title === item.props.headerText ) {
          selectedEntity = entity;
        }
      }


      this.setState({
        selectedEntity:selectedEntity,
      });

    }

  } //End onClick

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


}