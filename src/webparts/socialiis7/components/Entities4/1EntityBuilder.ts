

import * as ents from './index';
import { addOtherProps } from '../Entities1/1EntityBuilder';

import { IEntity, IWeb, ISocialiis7Props, ITopics } from '../ISocialiis7Props';
import {IUser, ISocialiis7State, IMyPivots, IPivot, ILoadData} from '../ISocialiis7State';

export function buildEntities4(onNavClick) {

    let Entities : IEntity[] = [];
    let thisSource: string = 'Entities4';
    //console.log('ents', ents);

    //Suppliers
    Entities.push(addOtherProps(ents.Autoliv(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.TRW(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.Veoneer(), onNavClick, thisSource));

    //TradeShows
    Entities.push(addOtherProps(ents.CES(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.NAIAS(), onNavClick, thisSource));

    //Government
    Entities.push(addOtherProps(ents.NHSTA(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.USDOT(), onNavClick, thisSource));

    //Industry
    Entities.push(addOtherProps(ents.IIHS(), onNavClick, thisSource));

    return Entities;
    
}
