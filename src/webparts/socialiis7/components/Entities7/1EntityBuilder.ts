
import { IEntity } from '../ISocialiis7Props';

import * as ents from './index';
import { addOtherProps } from '../Entities1/1EntityBuilder';

export function buildEntities7() {
    let Entities : IEntity[] = [];
    console.log('ents', ents);
    Entities.push(addOtherProps(ents.BlackCats()));
    Entities.push(addOtherProps(ents.ClashOfClans()));
    Entities.push(addOtherProps(ents.DarkSouls()));
    Entities.push(addOtherProps(ents.Lions()));

    return Entities;
}

