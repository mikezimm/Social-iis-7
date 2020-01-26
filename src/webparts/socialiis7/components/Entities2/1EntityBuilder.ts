
import * as ents from './index';
import { addOtherProps } from '../Entities1/1EntityBuilder';

import { INavLink } from 'office-ui-fabric-react/lib/Nav';

import { IEntity, IWeb, ISocialiis7Props, ITopics } from '../ISocialiis7Props';
import {IUser, ISocialiis7State, IMyPivots, IPivot, ILoadData} from '../ISocialiis7State';


export function buildEntities2(onNavClick ) {
    let Entities : IEntity[] = [];
    let thisSource: string = 'Entities2';
    //console.log('ents', ents);

    //GM
    Entities.push(addOtherProps(ents.GM(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.Chevy(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.Corvette(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.Camaro(), onNavClick, thisSource));

    //FCA
    Entities.push(addOtherProps(ents.FCA(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.Jeep(), onNavClick, thisSource));

    //Ford
    Entities.push(addOtherProps(ents.Ford(), onNavClick, thisSource));

    //Tesla
    Entities.push(addOtherProps(ents.Tesla(), onNavClick, thisSource));

    //EU
    Entities.push(addOtherProps(ents.Bentley(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.LandRover(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.VW(), onNavClick, thisSource));

    //Asia
    Entities.push(addOtherProps(ents.Tata(), onNavClick, thisSource));


    return Entities;
}
