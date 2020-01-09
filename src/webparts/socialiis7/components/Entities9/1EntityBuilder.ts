
import { IEntity } from '../ISocialiis7Props';

import * as ents from './index';
import { addOtherProps } from '../Entities1/1EntityBuilder';

export function buildEntities9() {
    let Entities : IEntity[] = [];
    console.log('ents', ents);
    Entities.push(addOtherProps(ents.MineCraft()));
    Entities.push(addOtherProps(ents.SubNautica()));
    Entities.push(addOtherProps(ents.PCBuild()));
    Entities.push(addOtherProps(ents.Jays2Cents()));

    return Entities;
}

