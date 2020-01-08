
import { IEntity } from '../ISocialiis7Props';

import * as ents from './index';

export function buildEntities() {
    let Entities : IEntity[] = [];
    console.log('ents', ents);
    Entities.push(ents.AndrewConnell());
    Entities.push(ents.BlackCats());
    Entities.push(ents.BlackCats());
    Entities.push(ents.ClashOfClans());
    Entities.push(ents.DarkSouls());
    Entities.push(ents.DavidWarner());
    Entities.push(ents.HugoBernier());
    Entities.push(ents.SIGGeneralDev());
    Entities.push(ents.SIGMonthlyDev());
    Entities.push(ents.SIGSPFx());
    return Entities;
}

