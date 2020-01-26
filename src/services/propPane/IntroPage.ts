import {
  IPropertyPanePage,
  PropertyPaneLabel,
  IPropertyPaneLabelProps,
  PropertyPaneHorizontalRule,
  PropertyPaneTextField, IPropertyPaneTextFieldProps,
  PropertyPaneLink, IPropertyPaneLinkProps,
  PropertyPaneDropdown, IPropertyPaneDropdownProps,
  IPropertyPaneDropdownOption,PropertyPaneToggle
} from '@microsoft/sp-webpart-base';

import * as strings from 'Socialiis7WebPartStrings';
import { pivotOptionsGroup} from './index';


export class IntroPage {
  public getPropertyPanePage(webPartProps): IPropertyPanePage {
    return <IPropertyPanePage>
    { // <page1>
      header: {
        description: 'strings.PropertyPaneAbout'
      },
      groups: [

/* */
        
        // 9 - Other web part options
        { groupName: 'Pivot Styles',
          groupFields: [
            PropertyPaneToggle('advancedPivotStyles', {
              label: '',
              offText: 'strings.FieldLabel_ToggleTextOff',
              onText: 'strings.FieldLabel_ToggleTextOn',
            }),
          ]}, // this group

/*
          useLocalList: Boolean;
          useMasterList: Boolean;
          localListURL?: string; //Get from list item
          masterListURL?: string; //Corporate or Central list url
          sourceListTitle: string;  // Static Name of list (for URL) - used for links and determined by first returned item
*/

        ,{ groupName: '',
          groupFields: [
            PropertyPaneToggle('useMasterList', {
              label: 'Use Master Entity List',
              offText: 'strings.FieldLabel_ToggleTextOff',
              onText: 'strings.FieldLabel_ToggleTextOn',
            }),
          ]}, // this group
          { isCollapsed: !webPartProps.useMasterList,
            groupFields: [
              PropertyPaneTextField('masterListURL', {
                label: 'Master List URL',
                description: 'Full URL of the default view of the list',
              }),
              PropertyPaneTextField('masterListFilter', {
                label: 'Master List Rest Filter',
                description: 'Rest style query, Main Topic is added by default',
              }),
            ]}, // this group


            ,{ groupName: '',
            groupFields: [
              PropertyPaneToggle('useLocalList', {
                label: 'Use Local Entity List',
                offText: 'strings.FieldLabel_ToggleTextOff',
                onText: 'strings.FieldLabel_ToggleTextOn',
              }),
            ]}, // this group
            { isCollapsed: !webPartProps.useLocalList,
              groupFields: [
                PropertyPaneTextField('localListURL', {
                  label: 'Local List URL',
                  description: 'Full URL of the default view of the list',
                }),
                PropertyPaneTextField('localListFilter', {
                  label: 'Local List Rest Filter',
                  description: 'Rest style query, Main Topic is added by default',
                }),
              ]}, // this group
              {

              groupFields: [
                PropertyPaneLabel('', {
                  text: 'Equals filter syntax:  Title eq \'FindMe\'',
                }),
                PropertyPaneLabel('', {
                  text: 'Contains string filter syntax:  substringof(\'FindMe\',StaticColumnName)',
                }),
              ]}, // this group
          

              //substringof('active',keywords)
/*
        { isCollapsed: !webPartProps.advancedPivotStyles,
          groupFields: [
            PropertyPaneDropdown('pivotSize', <IPropertyPaneDropdownProps>{
              label: strings.FieldLabel_PivSize,
              options: pivotOptionsGroup.pivSizeChoices,
            }),
            PropertyPaneDropdown('pivotFormat', <IPropertyPaneDropdownProps>{
              label: strings.FieldLabel_PivFormat,
              options: pivotOptionsGroup.pivFormatChoices,
            }),
            PropertyPaneDropdown('pivotOptions', <IPropertyPaneDropdownProps>{
              label: strings.FieldLabel_PivOptions,
              options: pivotOptionsGroup.pivOptionsChoices,
              disabled: true,
            }),
          ]}, // this group
*/

        ]}; // Groups
  } // getPropertyPanePage()
}

export let introPage = new IntroPage();