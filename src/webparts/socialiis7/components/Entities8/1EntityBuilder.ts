
import * as ents from './index';
import { addOtherProps } from '../Entities1/1EntityBuilder';

import { IEntity, IWeb, ISocialiis7Props, ITopics } from '../ISocialiis7Props';
import {IUser, ISocialiis7State, IMyPivots, IPivot, ILoadData} from '../ISocialiis7State';

export function buildEntities8(onNavClick ) {

    let Entities : IEntity[] = [];
    //console.log('ents', ents);
    let thisSource: string = 'Entities8';

    //Apps
    Entities.push(addOtherProps(ents.PowerBI(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.Excel(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.PowerApps(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.MSGraph(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.MSTeams(), onNavClick, thisSource));

    //MVPs
    Entities.push(addOtherProps(ents.AviSingh(), onNavClick, thisSource));
    
    return Entities;
}

