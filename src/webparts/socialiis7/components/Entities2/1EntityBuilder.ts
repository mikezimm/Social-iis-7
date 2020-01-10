
import { IEntity } from '../ISocialiis7Props';

import * as ents from './index';
import { addOtherProps } from '../Entities1/1EntityBuilder';

export function buildEntities2() {
    let Entities : IEntity[] = [];
    console.log('ents', ents);

    //GM
    Entities.push(addOtherProps(ents.GM()));
    Entities.push(addOtherProps(ents.Chevy()));
    Entities.push(addOtherProps(ents.Corvette()));
    Entities.push(addOtherProps(ents.Camaro()));

    //FCA
    Entities.push(addOtherProps(ents.FCA()));
    Entities.push(addOtherProps(ents.Jeep()));

    //Ford
    Entities.push(addOtherProps(ents.Ford()));

    //Tesla
    Entities.push(addOtherProps(ents.Tesla()));

    //EU
    Entities.push(addOtherProps(ents.Bentley()));
    Entities.push(addOtherProps(ents.LandRover()));
    Entities.push(addOtherProps(ents.VW()));

    //Asia
    Entities.push(addOtherProps(ents.Tata()));


    return Entities;
}
