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

  import { ITopics } from '../../webparts/socialiis7/components/ISocialiis7Props';
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
      {   index: 1,   key: 'Auto', text: "Auto OEMs"  },
      {   index: 7,   key: 'GM', text: "One OEM and children"  },
      {   index: 8,   key: 'VW', text: "VW"  },
      {   index: 8,   key: 'Tata', text: "Tata"  },
      {   index: 2,   key: 'Gaming', text: "Gaming"  },
      {   index: 3,   key: 'PC', text: "PC"  },
      {   index: 4,   key: 'Animals', text: "Animals"  },
      {   index: 5,   key: 'ttp', text: "ttp"  },
  ];

  public getTopics (mainTopic: string) {
    let subTopic1 = "";
    let subTopic2 = "";
    let subTopic3 = "";

    if ( mainTopic === 'MSFT') {
      subTopic1 = "MSFT";
      subTopic2 = "";
      subTopic3 = "";
    } else if ( mainTopic === 'SharePoint') {
      subTopic1 = "SIG";
      subTopic2 = "MSFT";
      subTopic3 = "MVP";
    } else if ( mainTopic === 'SPFx') {
      subTopic1 = "SIG";
      subTopic2 = "MSFT";
      subTopic3 = "MVP";
    } else if ( mainTopic === 'Auto') {
      subTopic1 = "OEM";
      subTopic2 = "Passive";
      subTopic3 = "Active";
    } else if ( ["GM","VW","FCA","Tata","Tesla"].indexOf(mainTopic) > -1 ) {
      subTopic1 = "OEM";
      subTopic2 = "Brand";
      subTopic3 = "Vehicle";
    } else if ( mainTopic === 'Gaming') {
      subTopic1 = "PC";
      subTopic2 = "FirstPerson";
      subTopic3 = "Builder";
    } else if ( mainTopic === 'PC') {
      subTopic1 = "PCBuild";
      subTopic2 = "Gaming";
      subTopic3 = "OpenWorld";
    } else  if ( mainTopic === 'Animals') {
      subTopic1 = "Pets";
      subTopic2 = "Africa";
      subTopic3 = "Dark";
    } else  if ( mainTopic === 'ttp') {
      subTopic1 = "Gaming";
      subTopic2 = "Animals";
      subTopic3 = "PS";
    } 

    let topics : ITopics = {
      mainTopic : mainTopic,
      subTopic1 : subTopic1,
      subTopic2 : subTopic2,
      subTopic3 : subTopic3,
    };

    return topics;
  }

  }

  export let socialiis7OptionsGroup = new Socialiis7OptionsGroup();