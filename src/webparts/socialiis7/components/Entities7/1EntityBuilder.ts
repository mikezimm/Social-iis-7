

import * as ents from './index';
import { addOtherProps } from '../Entities1/1EntityBuilder';
import { IEntity, IWeb, ISocialiis7Props, ITopics } from '../ISocialiis7Props';
import {IUser, ISocialiis7State, IMyPivots, IPivot, ILoadData} from '../ISocialiis7State';

export function buildEntities7(onNavClick ) {

    let Entities : IEntity[] = [];
    //console.log('ents', ents);
    let thisSource: string = 'Entities7';
    Entities.push(addOtherProps(ents.BlackCats(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.ClashOfClans(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.DarkSouls(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.Lions(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.SiteDesigns(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.ListFormatting(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.PnPPowerShell(), onNavClick, thisSource));
    Entities.push(addOtherProps(ents.ZeldaBotW(), onNavClick, thisSource));

    return Entities;
}

