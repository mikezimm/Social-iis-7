
import { IEntity, IWeb } from '../ISocialiis7Props';
import { INavLink } from 'office-ui-fabric-react/lib/Nav';
import { escape, cloneDeep } from '@microsoft/sp-lodash-subset';

import * as ents from './index';

export function buildEntities(onNavClick) {
    let Entities : IEntity[] = [];
    console.log('ents', ents);
    Entities.push( addOtherProps(ents.AndrewConnell(),onNavClick ) );
    Entities.push( addOtherProps(ents.DavidWarner(),onNavClick ) );
    Entities.push( addOtherProps(ents.HugoBernier(),onNavClick ) );
    Entities.push( addOtherProps(ents.JeffTeper(),onNavClick ) );
    Entities.push( addOtherProps(ents.SIGGeneralDev(),onNavClick ) );
    Entities.push( addOtherProps(ents.SIGMonthlyDev(),onNavClick ) );
    Entities.push( addOtherProps(ents.SIGSPFx(),onNavClick ) );
    Entities.push( addOtherProps(ents.VesaJuvonen(),onNavClick ) );
    
    return Entities;
}

function buildNavigationForWeb( Entity: IEntity, sectionName: string, onNavClick){

    let navigation: INavLink[] = [];
    let thisSection = Entity[sectionName];
    //return empty if this does not have any content
     if (sectionName !== 'debug') {
        if (!thisSection) { return navigation; }
        if (thisSection.length === 0 ) { return navigation; }
        if (!thisSection[0] ) { return navigation; }
        if (thisSection[0].url.length === 0 ) { return navigation; }
     }

    let newSection = cloneDeep(thisSection);

    if (sectionName !== 'debug') {
        navigation = newSection.map((item) => {
            return {
                name: item.title,
                key:   Entity.titleKey + '||||' + sectionName + '||||' + makeKeyFromString(item.title),
                url: item.url,
                onClick: onNavClick,
            };
        });
    } else {
        navigation = [{
            name: 'Share Me',
            key:   Entity.titleKey + '||||' + sectionName + '||||' + Entity.titleKey,
            url:   'xxxxx',
            onClick: onNavClick,
        }]
    }

    return navigation;

}

function makeKeyFromString(str : string){

    let result = "";
    result = str.replace(" ", "");
    return result;

}

export function  addOtherProps(Entity : IEntity, onNavClick ) {

    let result : IEntity = cloneDeep(Entity);
    result.titleKey = makeKeyFromString(result.title);
    Entity.titleKey = result.titleKey;
    if ( result.keywords.indexOf(result.title) < 0) { result.keywords.push(result.title);}

    result.navigation = [];
    //let blog = buildNavigationForWeb(Entity.blog, 'blog');
    //console.log('blog', blog);
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'blog', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'webSites', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'twitter', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'linkedIn', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'instagram', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'facebook', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'github', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'location', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'stock', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'debug', onNavClick));

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

