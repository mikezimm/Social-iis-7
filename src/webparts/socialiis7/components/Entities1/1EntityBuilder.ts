
import { IEntity, IWeb } from '../ISocialiis7Props';
import { INavLink } from 'office-ui-fabric-react/lib/Nav';
import { escape, cloneDeep } from '@microsoft/sp-lodash-subset';

import * as ents from './index';
import { keyframes } from 'office-ui-fabric-react';

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

    console.log('buildNavigationForWeb 1:',Entity, sectionName );

    let navigation: INavLink[] = [];
    let thisSection = Entity[sectionName];
    //return empty if this does not have any content
    //console.log('buildNavigationForWeb 2: thisSection',thisSection );
     if (sectionName !== 'debug') {
        if (!thisSection) { console.log('!thisSection');return navigation; }
        if (thisSection.length === 0 ) { console.log('.length === 0'); return navigation; }

        if ( sectionName !== 'youtube') {
            //This section only applies where the first key is not an array.
            if (!thisSection[0] ) { console.log('!thisSection[0]'); return navigation; }
            if (thisSection[0].url.length === 0 ) { console.log('!n[0].url.length === 0'); return navigation; }
        }


     }

    let newSection = cloneDeep(thisSection);

    if (sectionName === 'youtube') {
        //console.log('buildNavigationForWeb youtube:',Entity, sectionName );

        //let navigation = [];
        Object.keys(newSection).forEach(key => {
            //console.log('buildNavigationForWeb youtube keys(newSection):',key );
            let navElements = [];

            if (key === 'channels' || key === 'playLists' ) {
                navElements = newSection[key].map((item) => {

                    if ( item.objectID.length === 0 && item.objectID.url === 0 ) {return null; } else {
                        let host = 'https://www.youtube.com/';
                        if ( key === 'channels') { host += 'channel/'};
                        if ( key === 'playLists') { host += 'playlist?list='};
    
                        return {
                            name: item.title,
                            key:   Entity.titleKey + '||||' + sectionName + '||||' + makeKeyFromString(item.title),
                            url: host + item.objectID,
                            onClick: onNavClick,
                            mediaSource: sectionName,
                            objectType: item.objectType,
                            objectID: item.objectID,
        
                        };
                    }

                });
                //console.log('buildNavigationForWeb youtube navElements:',navElements );
                navigation = navigation.concat(navElements);
                console.log('buildNavigationForWeb youtube navigation1:',navigation );                
            }
            //console.log('buildNavigationForWeb youtube navigation2:',navigation );  
        });
        //console.log('buildNavigationForWeb youtube navigation3:',navigation );  

    } else  if (sectionName !== 'debug') {
        navigation = newSection.map((item) => {
            return {
                name: item.title,
                key:   Entity.titleKey + '||||' + sectionName + '||||' + makeKeyFromString(item.title),
                url: item.url,
                onClick: onNavClick,
                mediaSource: sectionName,
                objectType: sectionName,
                objectID: item.objectID,

            };
        });
    } else {
        navigation = [{
            name: 'Share Me',
            key:   Entity.titleKey + '||||' + sectionName + '||||' + Entity.titleKey,
            url:   'xxxxx',
            onClick: onNavClick,
            mediaSource: sectionName,
            objectID: 'the Cat Jumped over the Moon!',
            objectType: 'JSON',
        }]
    }
    console.log('buildNavigationForWeb youtube navigation4:',navigation );  
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
    console.log('Navigation B4 Youtube',result.navigation);
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'youtube', onNavClick));
    console.log('Navigation B4 After',result.navigation);
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

