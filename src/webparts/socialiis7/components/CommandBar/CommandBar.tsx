import * as React from 'react';

import { CommandBar, ICommandBarItemProps, } from "office-ui-fabric-react/lib/CommandBar";
import {CommandBarButton, IButtonProps,} from "office-ui-fabric-react/lib/Button";
import {IComponentAs, IComponentAsProps,} from "office-ui-fabric-react/lib/Utilities";

import { Text } from 'office-ui-fabric-react/lib/Text';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

import styles from './CommandBar.module.scss';


import { ICommandBarProps } from './ICommandBarProps';
import { ICommandBarState } from './ICommandBarState';
import { Utils } from './utils';


export default class MyCommandBar extends React.Component<ICommandBarProps, ICommandBarState> {

    constructor(props: ICommandBarProps, state: ICommandBarState) {
        super(props);
    
        this.state = {
          hovering: 10,
          visible:10
        };

        console.log(this.props);
        console.log(this.state);
      }


    public render(): JSX.Element {

      //const CustomButton = (p: any) => {

      const CustomLabelButton: IComponentAs<ICommandBarItemProps> = (p: IComponentAsProps<ICommandBarItemProps>) => {
        //These style examples do change button color and padding
        //<Icon {...p.iconProps} styles={{root: { marginRight: 10, color: 'green',padding: 10 }}} />
        //<Text styles={{root: { marginRight: 10, color: 'green',padding: 10 }}}></Text>

        return (
          <>
            <Icon {...p.iconProps} styles={{root: { padding: 3, fontSize: 18, marginRight: 10, fontWeight: 'bolder', color: '#00457E' }}}  />
            <Text styles={{root: { marginRight: 10, fontSize: 16, color: '#00457E'}}}>
              {p.text}
            </Text>
          </>
        );
      };

      const customButton = (props: IButtonProps) => {

        return (
          <CommandBarButton
            {...props}
            styles={{
              ...props.styles,
              root: {backgroundColor: 'white'  ,padding:'10px !important', height: 32},
              textContainer: { fontSize: 16, color: '#00457E' },
              icon: { 
                fontSize: 18,
                fontWeight: "bolder",
                margin: '0px 2px',
             },
            }}
          />
        );
      };

      const mini : ICommandBarItemProps = { key: 'mini',  name: '',   ariaLabel: 'Minimize',
        iconProps: {  iconName: 'ChromeMinimize', },
        onClick: () => this.props.minimize(),
        commandBarButtonAs: customButton
      };

      const search : ICommandBarItemProps = { key: 'search',  name: '', ariaLabel: 'Search',
        iconProps: {  iconName: 'Search', },
        onClick: () => this.props.searchMe(),
        commandBarButtonAs: customButton
      };

      const all : ICommandBarItemProps = { key: 'all',   name: '',   ariaLabel: 'ShowAll',
        iconProps: {  iconName: 'ClearFilter',  },
        onClick: () => this.props.showAll(),
        commandBarButtonAs: customButton
      };

      const layout : ICommandBarItemProps = { key: 'layout',  name: '', ariaLabel: 'Layout',
        iconProps: {
          iconName: ( this.props.setLayout === "Refresh" ? 'Refresh' : this.props.setLayout === "Refresh" ? "Refresh" : "Refresh" ),
        }, 
        onClick: () => this.props.toggleLayout(),
        commandBarButtonAs: customButton
      };

      const tips : ICommandBarItemProps = { key: 'tips',  name: '',   ariaLabel: 'Tips',
        iconProps: {
          iconName: 'Help',
          style: {color:( this.props.commandClass.indexOf('warnTips') > -1 ? 'red' : '')},
        }, 
        onClick: () => this.props.toggleTips(),
        commandBarButtonAs: customButton
      };

      const _farItems: ICommandBarItemProps[] = [ mini,  search, all, layout , tips  ];

      const _itemsClick: ICommandBarItemProps[] = [
        { key: 'Topics',  name: 'Topics',
          text: Utils.getTopicLabel(this.props.topics),
          ariaLabel: Utils.getTopicLabel(this.props.topics),
          iconProps: {
            iconName: 'DoubleChevronLeftMedMirrored',
          },
          onClick: () => this.props.toggleLayout(),
          commandBarButtonAs: customButton
        }
      ];

      const _itemsLabel: ICommandBarItemProps[] = [
        { key: 'Topics',
          name: 'Topics',
          text: Utils.getTopicLabel(this.props.topics),
          ariaLabel: Utils.getTopicLabel(this.props.topics),
          iconProps: {
            iconName: 'DoubleChevronLeftMedMirrored',
          },
          commandBarButtonAs: CustomLabelButton
        }
      ];

        return (
          <div className={ styles.cmdBar }>
            <CommandBar 
              //buttonAs={customButton}
              items={ _itemsClick }
              farItems={ _farItems }
              styles={{
                //root: {padding:'0px !important'},
                root: {backgroundColor: 'white'  ,padding:'10px'},
                primarySet: {backgroundColor: 'white'  ,padding:'10px'}, //This sets the main _items
                secondarySet:  {backgroundColor: 'white'  ,padding:'3px', height: '32px'}, //This sets the _farRightItems
                
              }}
            />
          </div>
        );
      }

  }
  