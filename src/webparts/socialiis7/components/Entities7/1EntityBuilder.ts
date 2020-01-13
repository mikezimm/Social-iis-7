
import { IEntity } from '../ISocialiis7Props';

import * as ents from './index';
import { addOtherProps } from '../Entities1/1EntityBuilder';

export function buildEntities7(onNavClick) {
    let Entities : IEntity[] = [];
    console.log('ents', ents);
    Entities.push(addOtherProps(ents.BlackCats(), onNavClick));
    Entities.push(addOtherProps(ents.ClashOfClans(), onNavClick));
    Entities.push(addOtherProps(ents.DarkSouls(), onNavClick));
    Entities.push(addOtherProps(ents.Lions(), onNavClick));
    Entities.push(addOtherProps(ents.SiteDesigns(), onNavClick));
    Entities.push(addOtherProps(ents.ListFormatting(), onNavClick));
    Entities.push(addOtherProps(ents.PnPPowerShell(), onNavClick));

    return Entities;
}

