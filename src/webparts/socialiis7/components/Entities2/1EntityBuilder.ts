
import { IEntity } from '../ISocialiis7Props';

import * as ents from './index';
import { addOtherProps } from '../Entities1/1EntityBuilder';

export function buildEntities2() {
    let Entities : IEntity[] = [];
    console.log('ents', ents);
    Entities.push(addOtherProps(ents.GM()));
    Entities.push(addOtherProps(ents.Ford()));
    Entities.push(addOtherProps(ents.FCA()));
    Entities.push(addOtherProps(ents.Tesla()));
    return Entities;
}
