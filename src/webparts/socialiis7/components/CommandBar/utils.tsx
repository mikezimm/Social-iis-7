//Utils Concept from:  https://stackoverflow.com/questions/32790311/how-to-structure-utility-class
import { ISocialiis7Props, ITopics, IEntity, NonArrayNodes } from '../ISocialiis7Props';
import {IUser, ISocialiis7State, IMyPivots, IPivot, ILoadData, IListEntities} from '../ISocialiis7State';

import { CommandBar,ICommandBarItemProps,  } from "office-ui-fabric-react/lib/CommandBar";
import {CommandBarButton, IButtonProps, } from "office-ui-fabric-react/lib/Button";
import {IComponentAs, IComponentAsProps,} from "office-ui-fabric-react/lib/Utilities";
import {Icon} from "office-ui-fabric-react/lib/Icon";
import {Text} from "office-ui-fabric-react/lib/Text";

import styles from './CommandBar.module.scss';

export class Utils {

    public static getTopicLabel (parentTopics: ITopics){

      let thisTitle = 'Topics ' +  parentTopics.current + ' of 4: ';
      /*
            thisTitle += "\"" + parentTopics.mainTopic + "\" and ";
            thisTitle += parentTopics.subTopic1.length > 0 ? " or \"" + parentTopics.subTopic1 + "\"" : "" ;
            thisTitle += parentTopics.subTopic2.length > 0 ? " or \"" + parentTopics.subTopic2 + "\"" : "" ;
            thisTitle += parentTopics.subTopic3.length > 0 ? " or \"" + parentTopics.subTopic3 + "\"" : "" ;
            thisTitle = thisTitle.replace('and  or', 'and'); //Clean up any extra words
      */
            thisTitle += "\"" + parentTopics.mainTopic + "\" and one of these: ";
            let currentTopics: string[] = [];
            
            if ( parentTopics.subTopic1.length > 0  ) { currentTopics.push( "\"" + parentTopics.subTopic1 + "\"" ); }
            if ( parentTopics.subTopic2.length > 0  ) { currentTopics.push( "\"" + parentTopics.subTopic2 + "\"" ); }
            if ( parentTopics.subTopic3.length > 0  ) { currentTopics.push( "\"" + parentTopics.subTopic3 + "\"" ); }
            thisTitle += currentTopics.join(' or ');

        return thisTitle;
    }
    
    public static getMainItems ( parentTopics: ITopics , toggleLayout, CustomLabelButton: any) {

      let thisTitle = 'Topics ' +  parentTopics.current + ' of 4: ';
/*
      thisTitle += "\"" + parentTopics.mainTopic + "\" and ";
      thisTitle += parentTopics.subTopic1.length > 0 ? " or \"" + parentTopics.subTopic1 + "\"" : "" ;
      thisTitle += parentTopics.subTopic2.length > 0 ? " or \"" + parentTopics.subTopic2 + "\"" : "" ;
      thisTitle += parentTopics.subTopic3.length > 0 ? " or \"" + parentTopics.subTopic3 + "\"" : "" ;
      thisTitle = thisTitle.replace('and  or', 'and'); //Clean up any extra words
*/
      thisTitle += "\"" + parentTopics.mainTopic + "\" and one of these: ";
      let currentTopics: string[] = [];
      
      if ( parentTopics.subTopic1.length > 0  ) { currentTopics.push( "\"" + parentTopics.subTopic1 + "\"" ); }
      if ( parentTopics.subTopic2.length > 0  ) { currentTopics.push( "\"" + parentTopics.subTopic2 + "\"" ); }
      if ( parentTopics.subTopic3.length > 0  ) { currentTopics.push( "\"" + parentTopics.subTopic3 + "\"" ); }
      thisTitle += currentTopics.join(' or ');

      return [
        {
          key: 'Topics',
          name: 'Topics',
          text: thisTitle,
          ariaLabel: 'Topics',
          //disabled: false,
          //allowDisabledFocus: true,
          //checked: true, // Tells wether it is check or not by default.
          iconProps: {
            iconName: 'DoubleChevronLeftMedMirrored',

          },
          onClick: () => toggleLayout(),
          commandBarButtonAs: CustomLabelButton({text: thisTitle}),
        }
      ];
    }

    public static getOverlflowItems() {
      return [];
    }


    public static getFarItems(thisProps, thisState ,toggleTips, minimize, searchMe, showAll, toggleLayout) {
      //console.log('getFarItems: thisProps', thisProps);
      //console.log('getFarItems: thisState', thisState);

      return [
        {
          key: 'mini',
          name: '',
          ariaLabel: 'Minimize',
          iconProps: {
            iconName: 'ChromeMinimize',

          },
          onClick: () => minimize(),
        },
        {
          key: 'search',
          name: '',
          ariaLabel: 'Search',
          /* this will do a tool tip but make the icon above the button.
          iconOnly: true,
            tooltipHostProps: {
              content: 'tooltipHostProps content',
            },
            // This does not work on the command bar icons.
            keytipProps: {
              content: 'tooltipHostProps content',
            }
          */
          iconProps: {
            iconName: 'Search',

          },
          onClick: () => searchMe(),
        },

        {
          key: 'all',
          name: '',
          ariaLabel: 'ShowAll',
          iconProps: {
            iconName: 'ClearFilter',
          },
          onClick: () => showAll(),
        },
        {
          key: 'layout',
          name: '',
          ariaLabel: 'Layout',
          iconProps: {
            iconName: ( thisProps.setLayout === "Refresh" ? 'Refresh' : thisProps.setLayout === "Refresh" ? "Refresh" : "Refresh" ),
          }, 
          onClick: () => toggleLayout(),
        },
        {
          key: 'tips',
          name: '',
          ariaLabel: 'Tips',
          iconProps: {
            iconName: 'Help',
            style: {color:( thisProps.commandClass.indexOf('warnTips') > -1 ? 'red' : '')},
          }, 
          onClick: () => toggleTips(),
        },


      ];
    }

    private getItemsExample = () => {
      return [
        {
          key: 'newItem',
          name: 'New',
          cacheKey: 'myCacheKey', // changing this key will invalidate this items cache
          iconProps: {
            iconName: 'Add'
          },
          ariaLabel: 'New',
          subMenuProps: {
            items: [
              {
                key: 'emailMessage',
                name: 'Email message',
                iconProps: {
                  iconName: 'Mail'
                },
                ['data-automation-id']: 'newEmailButton'
              },
              {
                key: 'calendarEvent',
                name: 'Calendar event',
                iconProps: {
                  iconName: 'Calendar'
                }
              }
            ]
          }
        },
        {
          key: 'upload',
          name: 'Upload',
          iconProps: {
            iconName: 'Upload'
          },
          href: 'https://dev.office.com/fabric',
          ['data-automation-id']: 'uploadButton'
        },
        {
          key: 'share',
          name: 'Share',
          iconProps: {
            iconName: 'Share'
          },
          onClick: () => console.log('Share')
        },
        {
          key: 'download',
          name: 'Download',
          iconProps: {
            iconName: 'Download'
          },
          onClick: () => console.log('Download')
        }
      ];
    }
  
    private getOverlflowItemsExample = () => {
      return [
        {
          key: 'move',
          name: 'Move to...',
          onClick: () => console.log('Move to'),
          iconProps: {
            iconName: 'MoveToFolder'
          }
        },
        {
          key: 'copy',
          name: 'Copy to...',
          onClick: () => console.log('Copy to'),
          iconProps: {
            iconName: 'Copy'
          }
        },
        {
          key: 'rename',
          name: 'Rename...',
          onClick: () => console.log('Rename'),
          iconProps: {
            iconName: 'Edit'
          }
        }
      ];
    }
  
    private getFarItemsExample = () => {
      return [
        {
          key: 'sort',
          name: 'Sort',
          ariaLabel: 'Sort',
          iconProps: {
            iconName: 'SortLines'
          },
          onClick: () => console.log('Sort')
        },
        {
          key: 'tile',
          name: 'Grid view',
          ariaLabel: 'Grid view',
          iconProps: {
            iconName: 'Tiles'
          },
          iconOnly: true,
          onClick: () => console.log('Tiles')
        },
        {
          key: 'info',
          name: 'Info',
          ariaLabel: 'Info',
          iconProps: {
            iconName: 'Info'
          },
          iconOnly: true,
          onClick: () => console.log('Info')
        }
      ];
    }

}