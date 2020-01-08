
import { IEntity } from '../ISocialiis7Props';

import * as ents from './index';

export function buildEntities7() {
    let Entities : IEntity[] = [];
    console.log('ents', ents);
    Entities.push(addTitleKey(ents.BlackCats()));
    Entities.push(addTitleKey(ents.ClashOfClans()));
    Entities.push(addTitleKey(ents.DarkSouls()));

    return Entities;
}

export function addTitleKey(Entity : IEntity ) {

    let result : IEntity = Entity;
    result.titleKey = result.title.replace(" ", "");
    return result;

}
