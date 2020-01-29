import {
    IPropertyPanePage,
    PropertyPaneLabel,
    IPropertyPaneLabelProps,
    PropertyPaneHorizontalRule,
    PropertyPaneTextField, IPropertyPaneTextFieldProps,
    PropertyPaneLink, IPropertyPaneLinkProps,
    PropertyPaneDropdown, IPropertyPaneDropdownProps,
    IPropertyPaneDropdownOption,
    PropertyPaneSlider,
    PropertyPaneToggle
  } from '@microsoft/sp-webpart-base';
  import { PropertyFieldMultiSelect } from '@pnp/spfx-property-controls/lib/PropertyFieldMultiSelect';
  
  import * as strings from 'Socialiis7WebPartStrings';
  import { pivotOptionsGroup, socialiis7OptionsGroup } from './index';
  
  export class WebPartSettingsPage {


    public getPropertyPanePage(webPartProps): IPropertyPanePage {
      return <IPropertyPanePage>        { // <page2>
        header: {
          displayGroupsAsAccordion: true,
          description: strings.PropertyPaneDescription,
        },
        groups: [

          {
            groupName: 'Stuff',
            groupFields: [
              PropertyPaneDropdown('navigationType', <IPropertyPaneDropdownProps>{
                label: 'Left Nav Style',
                options: socialiis7OptionsGroup.leftNavChoices,
              }),

              PropertyPaneDropdown('mainTopic', <IPropertyPaneDropdownProps>{
                label: 'Main Topic',
                options: socialiis7OptionsGroup.sampleTopicChoices,
              }),

              
/*
              toggleDef?: string;  //String of topics with ; parser for Default load
              toggle1?: string;  //String of topics with ; parser for Toggle button
              toggle2?: string;  //String of topics with ; parser for Toggle button
              toggle3?: string;  //String of topics with ; parser for Toggle button
              toggle4?: string;  //String of topics with ; parser for Toggle button
              specific?: string; //For specific list of entities
              random?: string; //For Random topics
*/

              PropertyPaneToggle('togglePropTopicHelp', {
                label: 'Show Topic Instructions in Webpart',
                offText: strings.FieldLabel_ToggleTextOff,
                onText: strings.FieldLabel_ToggleTextOn,
              }),

              PropertyPaneTextField('toggleDef', {
                label: 'Default Topics',
                description: 'Separated by semi-colon ;  First Topic is main filter',
              }),

              PropertyPaneTextField('toggle1', {
                label: 'Additional Topics 1 - activated on Shuffle',
                description: 'Separated by semi-colon ; First Topic is main filter',
              }),


              PropertyPaneTextField('toggle2', {
                label: 'Additional Topics 2 - activated on Shuffle',
                description: 'Separated by semi-colon ; First Topic is main filter',
              }),
              /*
              PropertyPaneTextField('toggle3', {
                label: 'Additional Topics 3 - activated on Shuffle',
                description: 'Separated by semi-colon ; First Topic is main filter',
              }),


              PropertyPaneTextField('toggle4', {
                label: 'Additional Topics 4 - activated on Shuffle',
                description: 'Separated by semi-colon ; First Topic is main filter',
              }),              
              */
            ]}, // this group

            ,{ groupName: '',
            groupFields: [
              PropertyPaneToggle('showCurrentTopics', {
                label: 'Show Current Topics (legacy)',
                offText: strings.FieldLabel_ToggleTextOff,
                onText: strings.FieldLabel_ToggleTextOn,
              }),
            ]}, // this group
            { isCollapsed: !webPartProps.showCurrentTopics,
              groupFields: [

              PropertyPaneTextField('mainTopic', {
                label: 'Or type in Main Topic',
                description: 'Proper cased text to filter all items by',
              }),

              PropertyPaneTextField('subTopic1', {
                label: 'Sub Topic1',
                description: 'This is the left most set of Pivots',
              }),

              PropertyPaneTextField('subTopic2', {
                label: 'SubTopic2',
                description: 'This is the middle set of Pivots',
              }),

              PropertyPaneTextField('subTopic3', {
                label: 'SubTopic3',
                description: 'This is the right most set of Pivots',
              }),
              
            ]

          }
/*
         { groupName: strings.PropPaneGroupLabel_UserFeedback,
          isCollapsed: webPartProps.setSize === "This does nothing yet" ? true : false ,
         groupFields: [

            PropertyPaneToggle('showElapsedTimeSinceLast', {
              label: strings.FieldLabel_ShowElapsedTimeSinceLast,
              offText: strings.FieldLabel_ToggleTextOff,
              onText: strings.FieldLabel_ToggleTextOn
            }),
                        
            PropertyPaneToggle('showTargetToggle', {
              label: strings.FieldLabel_ShowTargetToggle,
              offText: strings.FieldLabel_ToggleTextOff,
              onText: strings.FieldLabel_ToggleTextOn
            }),

            PropertyPaneToggle('showTargetBar', {
              disabled: webPartProps.showTargetToggle === true ? false : true,
              label: strings.FieldLabel_ShowTargetBar,
              offText: strings.FieldLabel_ToggleTextOff,
              onText: strings.FieldLabel_ToggleTextOn
            }),

            PropertyPaneSlider('dailyTarget', {
              disabled: webPartProps.showTargetToggle === true ? false : true,
              label: strings.FieldLabel_DailyTarget,
              min: 0,
              max: 10,
              step: 2,
            }),

            PropertyPaneSlider('weeklyTarget', {
              disabled: webPartProps.showTargetToggle === true ? false : true,
              label: strings.FieldLabel_WeeklyTarget,
              min: 0,
              max: 48,
              step: 8,
            }),       

         ]}, // this group


*/
      ]}; // Groups 
    } // getPropertyPanePage()

  } // WebPartSettingsPage
  
  export let webPartSettingsPage = new WebPartSettingsPage();