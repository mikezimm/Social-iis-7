
import { IEntity, IWeb } from '../ISocialiis7Props';
import { INavLink } from 'office-ui-fabric-react/lib/Nav';

import * as ents from './index';

export function buildEntities() {
    let Entities : IEntity[] = [];
    console.log('ents', ents);
    Entities.push( addOtherProps(ents.AndrewConnell() ) );
    Entities.push( addOtherProps(ents.DavidWarner() ) );
    Entities.push( addOtherProps(ents.HugoBernier() ) );
    Entities.push( addOtherProps(ents.SIGGeneralDev() ) );
    Entities.push( addOtherProps(ents.SIGMonthlyDev() ) );
    Entities.push( addOtherProps(ents.SIGSPFx() ) );
    Entities.push( addOtherProps(ents.VesaJuvonen() ) );
    
    return Entities;
}

function buildNavigationForWeb( thisSection: IWeb[], sectionName: string){

    let navigation: INavLink[] = [];

    //return empty if this does not have any content
    if (!thisSection) { return navigation; }
    if (thisSection.length === 0 ) { return navigation; }
    if (!thisSection[0] ) { return navigation; }
    if (thisSection[0].url.length === 0 ) { return navigation; }

    navigation = thisSection.map((item) => {
        return {
            name: item.title,
            key:  sectionName + makeKeyFromString(item.title),
            url: item.url,
        };
    });

    return navigation;

}

function makeKeyFromString(str : string){

    let result = "";
    result = str.replace(" ", "");
    return result;

}

export function  addOtherProps(Entity : IEntity ) {

    let result : IEntity = Entity;
    result.titleKey = makeKeyFromString(result.title);

    result.navigation = [];
    //let blog = buildNavigationForWeb(Entity.blog, 'blog');
    //console.log('blog', blog);
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity.blog, 'blog'));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity.webSites, 'webSites'));
    result.navigation = result.navigation.concat(buildNavigationForWeb([Entity.twitter], 'twitter'));
    result.navigation = result.navigation.concat(buildNavigationForWeb([Entity.linkedIn], 'linkedIn'));
    result.navigation = result.navigation.concat(buildNavigationForWeb([Entity.instagram], 'instagram'));
    result.navigation = result.navigation.concat(buildNavigationForWeb([Entity.facebook], 'facebook'));
    result.navigation = result.navigation.concat(buildNavigationForWeb([Entity.github], 'github'));
    result.navigation = result.navigation.concat(buildNavigationForWeb([Entity.location], 'location'));
    result.navigation = result.navigation.concat(buildNavigationForWeb([Entity.stock], 'stock'));

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

