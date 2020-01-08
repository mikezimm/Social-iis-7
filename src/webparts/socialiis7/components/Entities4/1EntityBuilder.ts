
import { IEntity } from '../ISocialiis7Props';

import * as ents from './index';

export function buildEntities4() {
    let Entities : IEntity[] = [];
    console.log('ents', ents);
    Entities.push(addTitleKey(ents.Autoliv()));
    Entities.push(addTitleKey(ents.TRW()));
    Entities.push(addTitleKey(ents.Veoneer()));

    return Entities;
}

export function addTitleKey(Entity : IEntity ) {

    let result : IEntity = Entity;
    result.titleKey = result.title.replace(" ", "");
    return result;

}
