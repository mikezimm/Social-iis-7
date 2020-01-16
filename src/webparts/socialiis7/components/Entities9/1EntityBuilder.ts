
import * as ents from './index';
import { addOtherProps } from '../Entities1/1EntityBuilder';

import { IEntity, IWeb, ISocialiis7Props, ITopics } from '../ISocialiis7Props';
import {IUser, ISocialiis7State, IMyPivots, IPivot, ILoadData} from '../ISocialiis7State';

export function buildEntities9(onNavClick ) {

    let Entities : IEntity[] = [];
    console.log('ents', ents);
    Entities.push(addOtherProps(ents.MineCraft(), onNavClick));
    Entities.push(addOtherProps(ents.SubNautica(), onNavClick));
    Entities.push(addOtherProps(ents.PCBuild(), onNavClick));
    Entities.push(addOtherProps(ents.Jays2Cents(), onNavClick));

    return Entities;
}

