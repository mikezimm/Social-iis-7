
import { IEntity } from '../ISocialiis7Props';

import * as ents from './index';
import { addOtherProps } from '../Entities1/1EntityBuilder';

export function buildEntities4() {
    let Entities : IEntity[] = [];
    console.log('ents', ents);
    Entities.push(addOtherProps(ents.Autoliv()));
    Entities.push(addOtherProps(ents.TRW()));
    Entities.push(addOtherProps(ents.Veoneer()));

    return Entities;
}
