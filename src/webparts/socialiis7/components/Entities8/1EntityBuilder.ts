
import { IEntity } from '../ISocialiis7Props';

import * as ents from './index';
import { addOtherProps } from '../Entities1/1EntityBuilder';

export function buildEntities8(onNavClick) {
    let Entities : IEntity[] = [];
    console.log('ents', ents);
    Entities.push(addOtherProps(ents.PowerBI(), onNavClick));
    Entities.push(addOtherProps(ents.Excel(), onNavClick));
    return Entities;
}

