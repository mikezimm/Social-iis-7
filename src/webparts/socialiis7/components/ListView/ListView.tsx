import {  } from '@microsoft/sp-webpart-base';

import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';
//import Utils from './utils';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

import { ListView, IViewField, SelectionMode, GroupOrder, IGrouping } from "@pnp/spfx-controls-react/lib/ListView";

import { ISocialiis7Props, ITopics, IEntity, NonArrayNodes } from '../ISocialiis7Props';
import {IUser, ISocialiis7State, IMyPivots, IPivot, ILoadData, IListEntities} from '../ISocialiis7State';

import * as fields from './ViewFields';

/**
 * 
 * @param parentProps 
 * @param parentState 
 * @param theseAreItems 
 */

export function listViewBuilder(parentProps: ISocialiis7Props, parentState: ISocialiis7State, theseAreItems: IEntity[]){

  let groupByFields: IGrouping[] = [  {   name: 'timeGroup',   order: 1,   }  ];

  let viewFields = fields.viewFieldsFull();

  let listView = 
    <ListView
      items={theseAreItems}
      viewFields={viewFields}
      compact={true}
      selectionMode={SelectionMode.none}
      //selection={this._getSelection}
      showFilter={true}
      //defaultFilter="John"
      filterPlaceHolder="Search..."
      //groupByFields={groupByFields}
    />;

  return listView;

}
