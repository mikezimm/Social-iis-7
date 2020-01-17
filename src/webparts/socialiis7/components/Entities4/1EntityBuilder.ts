

import * as ents from './index';
import { addOtherProps } from '../Entities1/1EntityBuilder';

import { IEntity, IWeb, ISocialiis7Props, ITopics } from '../ISocialiis7Props';
import {IUser, ISocialiis7State, IMyPivots, IPivot, ILoadData} from '../ISocialiis7State';

export function buildEntities4(onNavClick) {

    let Entities : IEntity[] = [];
    console.log('ents', ents);

    //Suppliers
    Entities.push(addOtherProps(ents.Autoliv(), onNavClick));
    Entities.push(addOtherProps(ents.TRW(), onNavClick));
    Entities.push(addOtherProps(ents.Veoneer(), onNavClick));

    //TradeShows
    Entities.push(addOtherProps(ents.CES(), onNavClick));
    Entities.push(addOtherProps(ents.NAIAS(), onNavClick));

    //Government
    Entities.push(addOtherProps(ents.NHSTA(), onNavClick));
    Entities.push(addOtherProps(ents.USDOT(), onNavClick));

    //Industry
    Entities.push(addOtherProps(ents.IIHS(), onNavClick));

    return Entities;
    
}
