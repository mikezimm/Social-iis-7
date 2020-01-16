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

  // 2 - Source and destination list information
  sourceListURL: string;
  sourceListTitle: string;
  
  // 7 - Media Choices - Left Side bar

  mainTopicPick: string;
  mainTopic: string;
  subTopic1: string;
  subTopic2: string;
  subTopic3: string; 
  
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
    const element: React.ReactElement<ISocialiis7Props > = React.createElement(
      Socialiis7,
      {
        description: this.properties.description,
        // 0 - Context
        pageContext: this.context.pageContext,
        tenant: this.context.pageContext.web.absoluteUrl.replace(this.context.pageContext.web.serverRelativeUrl,""),
        urlVars: this.getUrlVars(),
      
        // 1 - Analytics options  
        useListAnalytics: this.properties.useListAnalytics,
        analyticsWeb: strings.analyticsWeb,
        analyticsList: strings.analyticsList,
      
        // 2 - Source and destination list information
        sourceListURL: this.properties.sourceListURL, //Get from list item  
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
        },

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
    if (  propertyPath === 'mainTopic') {
      this.properties[propertyPath] = newValue;  
      let topics: ITopics = socialiis7OptionsGroup.getTopics(newValue);
      this.properties.subTopic1 = topics.subTopic1;
      this.properties.subTopic2 = topics.subTopic2;
      this.properties.subTopic3 = topics.subTopic3;

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
