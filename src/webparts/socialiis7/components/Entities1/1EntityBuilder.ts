
import { IEntity } from '../ISocialiis7Props';

import * as ents from './index';

export function buildEntities() {
    let Entities : IEntity[] = [];
    console.log('ents', ents);
    Entities.push(addTitleKey(ents.AndrewConnell()));
    Entities.push(addTitleKey(ents.DavidWarner()));
    Entities.push(addTitleKey(ents.HugoBernier()));
    Entities.push(addTitleKey(ents.SIGGeneralDev()));
    Entities.push(addTitleKey(ents.SIGMonthlyDev()));
    Entities.push(addTitleKey(ents.SIGSPFx()));
    return Entities;
}

export function addTitleKey(Entity : IEntity ) {

    let result : IEntity = Entity;
    result.titleKey = result.title.replace(" ", "");
    return result;

}

export function buildEntityKeywords(Entities : IEntity[], useKey: string) {

    let keyWords : string[] = [];

    for (let entity of Entities) {
        let theseKeys = entity[useKey];
        if ( theseKeys ) {
            for (let key of theseKeys){
                if (keyWords.indexOf(key) < 0) { keyWords.push(key);}
            }
        }
    }
    keyWords.sort();
    return keyWords;

}

export function getEntitiesForThis(Entities : IEntity[], useKey: string, thisKey: string) {

    let filteredEntities : IEntity[] = [];

    for (let entity of Entities) {
        let theseKeys = entity[useKey];
        if ( theseKeys ) {

            if (theseKeys.indexOf(thisKey) > -1) { filteredEntities.push(entity);}

        }
    }
    filteredEntities.sort();
    return filteredEntities;

}

