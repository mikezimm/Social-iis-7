
import { IEntity } from '../ISocialiis7Props';

import * as ents from './index';

export function buildEntities9() {
    let Entities : IEntity[] = [];
    console.log('ents', ents);
    Entities.push(addTitleKey(ents.MineCraft()));
    Entities.push(addTitleKey(ents.SubNautica()));
    Entities.push(addTitleKey(ents.PCBuild()));
    Entities.push(addTitleKey(ents.Jays2Cents()));

    return Entities;
}

export function addTitleKey(Entity : IEntity ) {

    let result : IEntity = Entity;
    result.titleKey = result.title.replace(" ", "");
    return result;

}
