import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

// npm install @pnp/logging @pnp/common @pnp/odata @pnp/sp --save
import { sp } from '@pnp/sp';

//Updated Jan 5, 2020 per https://pnp.github.io/pnpjs/getting-started/
import { Web } from "@pnp/sp/presets/all";

import { propertyPaneBuilder } from '../../services/propPane/PropPaneBuilder';
import { socialiis7OptionsGroup } from '../../services/propPane/ReactSocialiis7Options';
import { saveTheTime, getTheCurrentTime, saveAnalytics } from '../../services/createAnalytics';

import { PageContext } from '@microsoft/sp-page-context';


import * as strings from 'Socialiis7WebPartStrings';
import Socialiis7 from './components/Socialiis7';
import { ISocialiis7Props, ITopics } from './components/ISocialiis7Props';

export interface ISocialiis7WebPartProps {

  // 0 - Context
  description: string;
  pageContext: PageContext;

  // 1 - Analytics options
  useListAnalytics: boolean;
  analyticsWeb?: string;
  analyticsList?: string;
  stressMultiplier?: number;
  analyticsLoad: boolean;
  analyticsEntity: boolean;
  analyticsNav: boolean;
  analyticsError: boolean;

  // 2 - Source and destination list information
  useLocalList: Boolean;
  useMasterList: Boolean;
  localListURL: string;
  masterListURL: string;
  localListFilter?: string; //Get from list item
  masterListFilter?: string; //Corporate or Central list url
  sourceListTitle: string;
  
  // 7 - Media Choices - Left Side bar

  mainTopicPick: string;
  mainTopic: string;
  subTopic1: string;
  subTopic2: string;
  subTopic3: string; 

  toggleDef?: string;  //String of topics with ; parser for Default load
  toggle0?: string;
  toggle1?: string;  //String of topics with ; parser for Toggle button
  toggle2?: string;  //String of topics with ; parser for Toggle button
  toggle3?: string;  //String of topics with ; parser for Toggle button
  toggle4?: string;  //String of topics with ; parser for Toggle button
  specific?: string; //For specific list of entities
  random?: string; //For Random topics

  togglePropTopicHelp: boolean;
  
  userEntities1?: string;
  userEntities2?: string;  
  userEntities3?: string;

  // 8 - Pivot Choices - Top Bar
  pivotSize: string;
  pivotFormat: string;
  pivotOptions: string;
  pivotTab: string;  //May not be needed because we have projectMasterPriority

  navigationType: string;


}

export default class Socialiis7WebPart extends BaseClientSideWebPart<ISocialiis7WebPartProps> {

    //Added for Get List Data:  https://www.youtube.com/watch?v=b9Ymnicb1kc
    public onInit():Promise<void> {
      return super.onInit().then(_ => {
        // other init code may be present
  
        //https://stackoverflow.com/questions/52010321/sharepoint-online-full-width-page
        console.log('location',window.location.href);
        if ( window.location.href &&  
           window.location.href.indexOf("layouts/15/workbench.aspx") > 0  ) {
            
          if (document.getElementById("workbenchPageContent")) {
            document.getElementById("workbenchPageContent").style.maxWidth = "1300px";
          }
        } 
        
        //console.log('window.location',window.location);
        sp.setup({
          spfxContext: this.context
        });
      });
    }
  
    public getUrlVars(): {} {
      var vars = {};
      vars = location.search
      .slice(1)
      .split('&')
      .map(p => p.split('='))
      .reduce((obj, pair) => {
        const [key, value] = pair.map(decodeURIComponent);
        return ({ ...obj, [key]: value }) ;
      }, {});
      return vars;
    }


  public render(): void {

    let tenant = this.context.pageContext.web.absoluteUrl.replace(this.context.pageContext.web.serverRelativeUrl,"");
    let locationhref = window.location.href ? window.location.href : '';
    let pageType = 'Unknown'; //localWorkbench; hostedWorkbench; SharePoint
    if ( locationhref && locationhref.indexOf("layouts/15/workbench.aspx") > 0  ) {
      pageType = "Hosted Workbench";

    } else if (locationhref && locationhref.indexOf("/workbench.html") > 0 ) {
      pageType = "Local Workbench";

    } else { pageType = "SharePoint"; }

    const element: React.ReactElement<ISocialiis7Props > = React.createElement(
      Socialiis7,
      {
        description: this.properties.description,
        // 0 - Context
        pageContext: this.context.pageContext,
        tenant: tenant,
        urlVars: this.getUrlVars(),
        pageType: pageType,
        
        //Size courtesy of https://www.netwoven.com/2018/11/13/resizing-of-spfx-react-web-parts-in-different-scenarios/
        WebpartElement:this.domElement,
      
        // 1 - Analytics options  
        useListAnalytics: this.properties.useListAnalytics,
        analyticsWeb: strings.analyticsWeb,
        analyticsList: strings.analyticsList,
        startTime: getTheCurrentTime(),
        analyticsLoad: this.properties.analyticsLoad,
        analyticsEntity: this.properties.analyticsEntity,
        analyticsNav: this.properties.analyticsNav,
        analyticsError: this.properties.analyticsError,
        
        // 2 - Source and destination list information
        useLocalList: this.properties.useLocalList,
        useMasterList: this.properties.useMasterList,
        localListURL: this.properties.localListURL, //Get from list item  
        masterListURL: this.properties.masterListURL, //Get from list item  

        localListFilter: this.properties.localListFilter,
        masterListFilter: this.properties.masterListFilter,

        sourceListTitle: this.properties.sourceListTitle,  // Static Name of list (for URL) - used for links and determined by first returned item

      
        // 3 - 
      
        // 4 - 
      
        // 5 - UI Defaults

        // 6 - User Feedback
      
        // 7 - Media Choices - Left Side bar
        navigationType: this.properties.navigationType,

        topics: {
          mainTopic: this.properties.mainTopic,
          subTopic1: this.properties.subTopic1,
          subTopic2: this.properties.subTopic2,
          subTopic3: this.properties.subTopic3,

          toggleDef: this.properties.toggleDef,  //String of topics with ; parser for Default load
          toggle0: this.properties.toggleDef,  //String of topics with ; parser for Toggle button
          toggle1: this.properties.toggle1,  //String of topics with ; parser for Toggle button
          toggle2: this.properties.toggle2,  //String of topics with ; parser for Toggle button
          toggle3: this.properties.toggle3,  //String of topics with ; parser for Toggle button
          toggle4: this.properties.toggle4,  //String of topics with ; parser for Toggle button
          specific: this.properties.specific, //For specific list of entities
          random: this.properties.random, //For Random topics
          current: 0,

        },

        togglePropTopicHelp: this.properties.togglePropTopicHelp,

        userEntities1: this.properties.userEntities1,
        userEntities2: this.properties.userEntities2, 
        userEntities3: this.properties.userEntities3,

        // 8 - Pivot Choices - Top Bar
        pivotSize: this.properties.pivotSize,
        pivotFormat: this.properties.pivotFormat,
        pivotOptions: this.properties.pivotOptions,
        pivotTab: 'Projects', //this.properties.pivotTab (was setTab in pivot-tiles)
        
        // 9 - Other web part options

      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return propertyPaneBuilder.getPropertyPaneConfiguration(this.properties);
  }
  
  protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void {

      //exit on these
      if (  ['togglePropTopicHelp','showCurrentTopics'].indexOf(propertyPath) > -1 ) { return; }
       

    /**
     * Use this section when there are multiple web part configurations
     */
      /*
          let newMap : any = {};
          if (this.properties.scenario === 'DEV' ) {
            //newMap = availableListMapping.getListColumns(newValue);
          } else if (this.properties.scenario === 'TEAM') {
            //newMap = availableListMapping.getListColumns(newValue);  
          } else if (this.properties.scenario === 'CORP') {
            //newMap = availableListMapping.getListColumns(newValue); 
          }

          const hasValues = Object.keys(newMap).length;

          if (hasValues !== 0) {
            //this.properties.listTitle = newMap.listDisplay;
          } else {
            console.log('Did NOT List Defintion... updating column name props');
          }
          this.context.propertyPane.refresh();

      /**
     * Use this section when there are multiple web part configurations
     */

    /**
     * This section is used to determine when to refresh the pane options
     */
    let updateOnThese = [
      'setSize','setTab','otherTab','setTab','otherTab','setTab','otherTab','setTab','otherTab',
      'navigationType'
    ];
    console.log('onPropertyPaneFieldChanged: ',propertyPath, newValue);

    if (  propertyPath === 'toggleDef') {
      this.properties.toggleDef = newValue;
      this.properties.toggle0 = newValue;
      let subTopics : string[] = newValue.split(';');

      this.properties.mainTopic = subTopics[0] ? subTopics[0] : '';
      this.properties.subTopic1 = subTopics[1] ? subTopics[1] : '';
      this.properties.subTopic2 = subTopics[2] ? subTopics[2] : '';
      this.properties.subTopic3 = subTopics[3] ? subTopics[3] : '';

      this.context.propertyPane.refresh();
      
      console.log('onPropertyPaneFieldChanged #1: subTopics', subTopics);
      console.log('onPropertyPaneFieldChanged #1: this.properties', this.properties);

    } else if (  ['subTopic1','subTopic2','subTopic3'].indexOf(propertyPath) > -1 ) {
      this.properties[propertyPath] = newValue;
      let subTopics: string[] = [this.properties.mainTopic];
      propertyPath === 'subTopic1' ? subTopics.push(newValue) : subTopics.push(this.properties.subTopic1) ;
      propertyPath === 'subTopic2' ? subTopics.push(newValue) : subTopics.push(this.properties.subTopic2) ;
      propertyPath === 'subTopic3' ? subTopics.push(newValue) : subTopics.push(this.properties.subTopic3) ;
      this.properties.toggleDef = subTopics.join(';');
      this.properties.toggle0 = subTopics.join(';');

      this.context.propertyPane.refresh();
      
      console.log('onPropertyPaneFieldChanged #1: subTopics', subTopics);
      console.log('onPropertyPaneFieldChanged #1: this.properties', this.properties);


    } else if (  propertyPath === 'mainTopic') {
      this.properties[propertyPath] = newValue;
      let topics: ITopics = socialiis7OptionsGroup.getTopics(newValue);
      this.properties.subTopic1 = topics.subTopic1;
      this.properties.subTopic2 = topics.subTopic2;
      this.properties.subTopic3 = topics.subTopic3;

      this.properties.toggleDef = topics.toggleDef;
      this.properties.toggle0 = topics.toggleDef;
      this.properties.toggle1 = topics.toggle1;
      this.properties.toggle2 = topics.toggle2;
      this.properties.toggle3 = topics.toggle3;
      this.properties.toggle4 = topics.toggle4;

      this.properties.specific = topics.specific;
      this.properties.random = topics.random;

      this.context.propertyPane.refresh();
      
      console.log('onPropertyPaneFieldChanged #1: topics', topics);
      console.log('onPropertyPaneFieldChanged #1: this.properties', this.properties);

    }

    if (  ['subTopic1', 'subTopic2', 'subTopic3'].indexOf(propertyPath) > -1 ) {

      if (propertyPath === 'subTopic1') { 
        this.properties.subTopic1 = newValue;
        this.properties.subTopic2 = '';
        this.properties.subTopic3 = '';
        
      } else if ( propertyPath === 'subTopic2' ) {
        this.properties.subTopic2 = newValue;
        this.properties.subTopic3 = '';

      } else if ( propertyPath === 'subTopic3' ) {
        this.properties.subTopic3 = newValue;

      } else { 
        alert('There was a problem in onPropertyPaneFieldChanged()... checksubTopicX'); 
      }

      this.context.propertyPane.refresh();
      
      console.log('onPropertyPaneFieldChanged #2: this.properties', this.properties);

    }

    if (updateOnThese.indexOf(propertyPath) > -1 ) {
      this.properties[propertyPath] = newValue;   
      this.context.propertyPane.refresh();

    } else { //This can be removed if it works

    }
    this.render();
  }
}
