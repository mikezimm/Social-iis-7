
import * as ents from './index';
import { addOtherProps } from '../Entities1/1EntityBuilder';

import { IEntity, IWeb, ISocialiis7Props, ITopics } from '../ISocialiis7Props';
import {IUser, ISocialiis7State, IMyPivots, IPivot, ILoadData} from '../ISocialiis7State';

export function buildEntities9(onNavClick ) {

    let Entities : IEntity[] = [];
    //console.log('ents', ents);
    let thisSource: string = 'Entities9';
    Entities.push(addOtherProps(ents.MineCraft(), onNavClick, thisSource ));
    Entities.push(addOtherProps(ents.SubNautica(), onNavClick, thisSource ));
    Entities.push(addOtherProps(ents.PCBuild(), onNavClick, thisSource ));
    Entities.push(addOtherProps(ents.Jays2Cents(), onNavClick, thisSource ));
    Entities.push(addOtherProps(ents.FlightSimulator20(), onNavClick, thisSource ));

    return Entities;
}

