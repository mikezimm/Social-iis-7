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