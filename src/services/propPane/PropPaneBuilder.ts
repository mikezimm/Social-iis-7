import {
  IPropertyPaneConfiguration,
} from '@microsoft/sp-webpart-base';

import {
  introPage,
  webPartSettingsPage,
  userEntitiesPage1,
  userEntitiesPage2,
  userEntitiesPage3,

} from './index';

/*
        IntroPage.getPropertyPanePage(),
        WebPartSettingsPage.getPropertyPanePage(),
        ListMappingPage.getPropertyPanePage(),
*/

export class PropertyPaneBuilder {
  public getPropertyPaneConfiguration(webPartProps): IPropertyPaneConfiguration {
    return <IPropertyPaneConfiguration>{
      pages: [
        introPage.getPropertyPanePage(webPartProps),
        webPartSettingsPage.getPropertyPanePage(webPartProps),
        userEntitiesPage1.getPropertyPanePage(webPartProps),
        userEntitiesPage2.getPropertyPanePage(webPartProps),
        userEntitiesPage3.getPropertyPanePage(webPartProps),
      ]
    };
  } // getPropertyPaneConfiguration()

}

export let propertyPaneBuilder = new PropertyPaneBuilder();