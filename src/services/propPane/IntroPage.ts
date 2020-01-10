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