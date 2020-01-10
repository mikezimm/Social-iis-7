import {
    IPropertyPanePage,
    PropertyPaneLabel,
    IPropertyPaneLabelProps,
    PropertyPaneHorizontalRule,
    PropertyPaneTextField, IPropertyPaneTextFieldProps,
    PropertyPaneLink, IPropertyPaneLinkProps,
    PropertyPaneDropdown, IPropertyPaneDropdownProps,
    IPropertyPaneDropdownOption
  } from '@microsoft/sp-webpart-base';

  import { Pivot, IPivotStyles, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
  import { Image, ImageFit, ImageCoverStyle,IImageProps,IImageState } from 'office-ui-fabric-react/lib/Image';

  import * as strings from 'Socialiis7WebPartStrings';

  export class Socialiis7OptionsGroup {


    public leftNavChoices: IPropertyPaneDropdownOption[] = <IPropertyPaneDropdownOption[]>[
        {   index: 0,   key: 'naviation', text: "Navigation"  },
        {   index: 1,   key: 'choice', text: "Choice"  },
    ];
    
    //Currently may not be neccessary
    public getLeftNav (findMe) {
        return findMe;
    }

    public sampleTopicChoices: IPropertyPaneDropdownOption[] = <IPropertyPaneDropdownOption[]>[
      {   index: 0,   key: 'SharePoint', text: "SharePoint"  },
      {   index: 6,   key: 'SPFx', text: "SPFx"  },
      {   index: 1,   key: 'Auto', text: "Auto"  },
      {   index: 2,   key: 'Game', text: "Game"  },
      {   index: 3,   key: 'PC', text: "PC"  },
      {   index: 4,   key: 'Animals', text: "Animals"  },
      {   index: 5,   key: 'ttp', text: "ttp"  },
  ];


  }

  export let socialiis7OptionsGroup = new Socialiis7OptionsGroup();