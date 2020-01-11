
import { IEntity } from '../ISocialiis7Props';

import * as ents from './index';
import { addOtherProps } from '../Entities1/1EntityBuilder';

export function buildEntities2(onNavClick) {
    let Entities : IEntity[] = [];
    console.log('ents', ents);

    //GM
    Entities.push(addOtherProps(ents.GM(), onNavClick));
    Entities.push(addOtherProps(ents.Chevy(), onNavClick));
    Entities.push(addOtherProps(ents.Corvette(), onNavClick));
    Entities.push(addOtherProps(ents.Camaro(), onNavClick));

    //FCA
    Entities.push(addOtherProps(ents.FCA(), onNavClick));
    Entities.push(addOtherProps(ents.Jeep(), onNavClick));

    //Ford
    Entities.push(addOtherProps(ents.Ford(), onNavClick));

    //Tesla
    Entities.push(addOtherProps(ents.Tesla(), onNavClick));

    //EU
    Entities.push(addOtherProps(ents.Bentley(), onNavClick));
    Entities.push(addOtherProps(ents.LandRover(), onNavClick));
    Entities.push(addOtherProps(ents.VW(), onNavClick));

    //Asia
    Entities.push(addOtherProps(ents.Tata(), onNavClick));


    return Entities;
}
