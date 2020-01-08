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

  private containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
          console.log('containsObject: True',obj, list);
          return true;
        }
    }

    console.log('containsObject: False',obj, list);
    return false;
}

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
        console.log('createPivotData: ',headers, item);
        if (headers.indexOf(item) < 0 ) { result.push(newPivot); headers.push(item) }
      }

    } else {
      for (let item of sourceArray) {
        console.log('createPivotData: typeof item ',typeof item);
        console.log('createPivotData: typeof item ',typeof item === 'string');
        if (typeof item !== 'string' && typeof item !== 'number'){
          for (let child of item[key]) {
            let newPivot = {
              headerText: child,
              itemKey: child.replace(" ", ""),
              filter: child,
            };
            console.log('createPivotData: ',headers, child);
            if (headers.indexOf(child) < 0 ) { result.push(newPivot); headers.push(child) }
          }
        } else {
          let newPivot = {
            headerText: item[key],
            itemKey: item[key].replace(" ", ""),
            filter: item[key],
          };
          console.log('createPivotData: ',headers, item[key]);
          if (headers.indexOf(item[key]) < 0 ) { result.push(newPivot); headers.push(item[key]) }
        }

      }

    }

    return result;
  }

  public constructor(props:ISocialiis7Props){
    super(props);
    let currentPivotSet = "keysForTopic";
    let thisTopic = "SharePoint";
    let Entities1 = buildEntities();
    let Entities2 = buildEntities2();
    let Entities4 = buildEntities4();
    let Entities7 = buildEntities7();
    let Entities9 = buildEntities9();    
    
    let allEntities = Entities1.concat(Entities2).concat(Entities4).concat(Entities7).concat(Entities9);
    let allEntityKeywords = buildEntityKeywords(allEntities, "keywords");
    let allTopics = buildEntityKeywords(allEntities, "topics");
    let entitiesForTopics = getEntitiesForThis(allEntities, "topics",thisTopic);
    let keysForTopic = buildEntityKeywords(entitiesForTopics, "keywords");
    

    let pivots : IMyPivots = {
      allTopics: [],
      allEntityKeywords: [],
      keysForTopic: [],
      entities: [],
      spacers: [],
    };

    pivots.allTopics = this.createPivotData(allTopics, null);
    pivots.keysForTopic = this.createPivotData(keysForTopic, null);
    pivots.allEntityKeywords = this.createPivotData(entitiesForTopics, 'keywords');
    pivots.entities = this.createPivotData(allEntities, 'title');
    pivots.spacers =  this.createPivotData([" "," "," "], null);

    let currentPivots : IPivot[][] = [pivots.allEntityKeywords,pivots.keysForTopic];


    this.state = { 
      sourceListName: "Something",
      description: "desc goes here",
      pivots: pivots,
      loadStatus: "loading",
      currentPivotSet: currentPivotSet,
      currentPivots: currentPivots,
      loadData: {
        thisTopic: thisTopic,
        Entities1: Entities1,
        Entities2: Entities2,
        Entities4: Entities4,
        Entities7: Entities7,
        Entities9: Entities9,
        allEntities: allEntities,
        allEntityKeywords: allEntityKeywords,
        allTopics: allTopics,
        entitiesForTopics: entitiesForTopics,
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

  public createPivotObject(pivots: IPivot[][], display){

    if (pivots.length === 0) { return '';}

    //let setPivot = pivots[0].headerText;
    let pivotPart = 
    <Pivot 
      style={{ flexGrow: 1, paddingLeft: '10px', display: display }}
      linkSize= { pivotOptionsGroup.getPivSize(this.props.pivotSize) }
      linkFormat= { pivotOptionsGroup.getPivFormat(this.props.pivotFormat) }
      onLinkClick= { this.onLinkClick.bind(this) }  //{this.specialClick.bind(this)}
      //selectedKey={ setPivot }
      headersOnly={true}>
        {this.createPivots(pivots[0] , this.props)}
        {this.createPivots(this.state.pivots.spacers , this.props)}
        {this.createPivots(pivots[1] , this.props)}
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

    /*
    if (this.state.syncProjectPivotsOnToggle){
      display1 = "block";
      display2 = "none";
      choice1 = this.state.projectMasterPriorityChoice;
      choice2 = this.state.projectMasterPriorityChoice;
    }
*/

    return (
      <div className={ styles.socialiis7 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
          <div className={styles.floatLeft}>
          { this.createPivotObject(this.state.currentPivots, display1)  }
          </div>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ddPWBxh6EX4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>

              </a>
            </div>
          </div>
        </div>
      </div>
    );
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

      for (let p of pivots){
        if ( p.headerText === item.props.headerText ) {
          thisFilter.push(p.filter);
        }
      }


      this.setState({

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