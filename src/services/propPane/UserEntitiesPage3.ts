import {
    IPropertyPanePage,
    PropertyPaneLabel,
    IPropertyPaneLabelProps,
    PropertyPaneTextField, IPropertyPaneTextFieldProps,
    PropertyPaneLink, IPropertyPaneLinkProps,

  } from '@microsoft/sp-webpart-base';
  
  import * as strings from 'Socialiis7WebPartStrings';
  
  export class UserEntitiesPage3 {

    public getPropertyPanePage(webPartProps): IPropertyPanePage {
      return <IPropertyPanePage>        { // <page2>
        header: {
          displayGroupsAsAccordion: false,
          description: 'Enter personal entities here.'
        },
        groups: [
            {
                groupFields: [
                  PropertyPaneLabel('About Text', {
                    text: 'This property needs to be filled out in a specific JSON structure or it will not work'
                  }),
      
                  PropertyPaneLink('JSON Example Structure' , {
                    text: 'Github Repo:  Social iis',
                    href: 'https://github.com/mikezimm/Social-iis-7/wiki/JSON-Entity-Structure',
                    target: '_blank',
                  }),

                  PropertyPaneLink('Verify your JSON is proper JSON here' , {
                    text: 'Code Beautify.org',
                    href: 'https://codebeautify.org/jsonviewer/',
                    target: '_blank',
                  }),

                ]
            },
            {
                groupName: 'Add your own entities',
                groupFields: [
                PropertyPaneTextField('userEntities3', {
                    label: 'Enter JSON Entity Object[s]',
                    description: 'This is description',
                    multiline: true,
                }),
                ]

            }
        ]}; // Groups 
    } // getPropertyPanePage()

} // WebPartSettingsPage
  
  export let userEntitiesPage3 = new UserEntitiesPage3();