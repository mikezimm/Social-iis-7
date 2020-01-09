

import * as React from 'react';

import {ISocialiis7State} from './ISocialiis7State';

import { ISocialiis7Props, IEntity } from './ISocialiis7Props';

import * as strings from 'Socialiis7WebPartStrings';

import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';

import styles from './Socialiis7.module.scss';


/*
Entry Type Choices need to match these:  \src\services\propPane\WebPartSettingsPage.ts

    public defaultTimePickerChoices: IPropertyPaneDropdownOption[] = <IPropertyPaneDropdownOption[]>[
        {   index: 0,   key: 'sinceLast', text: "Since last entry"  },
        {   index: 1,   key: 'slider', text: "Slider - use Now as start or end"  },
        {   index: 2,   key: 'manual', text: "Manual enter start and end"  },
    ];

*/

export function creatEntryTypeChoices(parentProps:ISocialiis7Props , parentState: ISocialiis7State, _onChange){

  let options : IChoiceGroupOption[] = [];
  let choiceSpacer = '\u00A0\u00A0';
  let spacer4x = ""; // +  +  + ;
  options.push(  {key: 'blog', text: 'Blog', disabled: ( parentState.selectedEntity.blog[0].url ? false: true) });
  options.push(  {key: 'twitter', text: 'Twitter', disabled: ( parentState.selectedEntity.twitter.title && parentState.selectedEntity.twitter.title.length>0 ? false: true)  });
  options.push(  {key: 'youTube', text: 'YouTube', disabled: ( parentState.selectedEntity.youtube.user && parentState.selectedEntity.youtube.user.length >0  ? false: true)  });
  options.push(  {key: 'location', text: 'Location', disabled: ( parentState.selectedEntity.location && parentState.selectedEntity.location.url ? false: true)  });
  options.push(  {key: 'github', text: 'Github', disabled: ( parentState.selectedEntity.github && parentState.selectedEntity.github.title? false: true)  });
  options.push(  {key: 'linkedIn', text: 'LinkedIn', disabled: ( parentState.selectedEntity.linkedIn && parentState.selectedEntity.linkedIn.url ? false: true)  });
  options.push(  {key: 'webSites', text: 'WebSites', disabled: ( parentState.selectedEntity.webSites[0] && parentState.selectedEntity.webSites[0].url ? false: true)  });

  return (
    
    <ChoiceGroup
      // className = "inlineflex" //This didn't do anything
      //className="defaultChoiceGroup" //This came with the example but does not seem to do anything
      //https://github.com/OfficeDev/office-ui-fabric-react/issues/8079#issuecomment-479136073
      //styles={{ flexContainer: { display: "flex" , paddingLeft: 30} }}
      selectedKey={ parentState.selectedMedia }
      options={options}
      onChange={_onChange}
      label="Social Footprint"
      required={true}
    />
  );
}

/*
function _onChange(ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption): void {
  console.dir(option);
}
*/