
import { IEntity } from '../ISocialiis7Props';

import * as ents from './index';
import { addOtherProps } from '../Entities1/1EntityBuilder';

export function buildEntities4(onNavClick) {
    let Entities : IEntity[] = [];
    console.log('ents', ents);
    Entities.push(addOtherProps(ents.Autoliv(), onNavClick));
    Entities.push(addOtherProps(ents.TRW(), onNavClick));
    Entities.push(addOtherProps(ents.Veoneer(), onNavClick));

    Entities.push(addOtherProps(ents.CES(), onNavClick));
    Entities.push(addOtherProps(ents.NAIAS(), onNavClick));
    Entities.push(addOtherProps(ents.NHSTA(), onNavClick));

    Entities.push(addOtherProps(ents.IIHS(), onNavClick));

    return Entities;
}
