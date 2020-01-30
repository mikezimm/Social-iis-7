

import { escape, cloneDeep } from '@microsoft/sp-lodash-subset';


import { INavLink } from 'office-ui-fabric-react/lib/Nav';
import * as ents from './index';
import { keyframes } from 'office-ui-fabric-react';

import { IEntity, NonArrayNodes, IWeb, ISocialiis7Props, ITopics } from '../ISocialiis7Props';
import {IUser, ISocialiis7State, IMyPivots, IPivot, ILoadData} from '../ISocialiis7State';

//export function buildEntities(onNavClick, parentProps: ISocialiis7Props, parentState: ISocialiis7State) {
export function buildEntities(onNavClick ) {
    let Entities : IEntity[] = [];
    //console.log('ents', ents);
    let thisSource = 'Entities1';

    //MVPs
    Entities.push( addOtherProps(ents.AndrewConnell(),onNavClick, thisSource ) );
    Entities.push( addOtherProps(ents.DavidWarner(),onNavClick, thisSource ) );
    Entities.push( addOtherProps(ents.HugoBernier(),onNavClick, thisSource ) );
    Entities.push( addOtherProps(ents.TheChrisKent(),onNavClick, thisSource ) );

    //MSFT
    Entities.push( addOtherProps(ents.JeffTeper(),onNavClick, thisSource ) );
    Entities.push( addOtherProps(ents.VesaJuvonen(),onNavClick, thisSource ) );

    //SIGs
    Entities.push( addOtherProps(ents.SIGGeneralDev(),onNavClick,thisSource ) );
    Entities.push( addOtherProps(ents.SIGMonthlyDev(),onNavClick, thisSource ) );
    Entities.push( addOtherProps(ents.SIGSPFx(),onNavClick, thisSource ) );
    Entities.push( addOtherProps(ents.SIGMSTeams(),onNavClick, thisSource ) );
    Entities.push( addOtherProps(ents.SIGGraph(),onNavClick, thisSource ) );
    Entities.push( addOtherProps(ents.SIGPowerApps(),onNavClick, thisSource ) );

    //Topics
    Entities.push( addOtherProps(ents.SPFx(),onNavClick, thisSource ) );

    return Entities;
}

//https://codeblogmoney.com/validate-json-string-using-javascript/
export function IsValidJSONString(str) {
    if ( str == null ){
        return false;
    } else {
        try {
            JSON.parse(str);
        } catch (e) {
            console.log('string is not a valid JSON');
            return false;
        }
        console.log('string IS a valid JSON');
        return true;
    }

}


export function buildUserEntities(onNavClick , userEntity: string, source: string) {
    let Entities : IEntity[] = [];

    let newEntity = JSON.parse(userEntity);

    if ( userEntity.indexOf('[') !== 0 ) {
        // assume it's single item
        Entities.push( addOtherProps(newEntity, onNavClick, source ) );
    } else {
        for (let ent of newEntity) {
            Entities.push( addOtherProps(ent, onNavClick, source ) );
        }
    }

    return Entities;
}

function buildNavigationForWeb( Entity: IEntity, sectionName: string, onNavClick){

    //console.log('buildNavigationForWeb 1:',Entity, sectionName );
    let navigation: INavLink[] = [];
    let thisSection = Entity[sectionName];
    if ( !sectionName ) { return navigation; }
    else if ( sectionName.indexOf('web') > -1 ) { sectionName = 'website'; }

    //return empty if this does not have any content
    //console.log('buildNavigationForWeb 2: thisSection',thisSection );
     if (sectionName !== 'debug') {
        if (!thisSection) { 
            //console.log('!thisSection');
            return navigation; }
        if (thisSection.length === 0 ) { console.log('.length === 0'); return navigation; }

        
        //Look for all keys that are not arrays.... test them
        if ( NonArrayNodes.indexOf(sectionName) > -1 ) {
            if ( thisSection.url.length === 0 && thisSection.NavTitle.length === 0) { 
                //console.log('!n[0].url.length === 0'); 
                return navigation; }

        //Then test all items that should be arrays
        } else if ( sectionName !== 'youtube') {
            //This section only applies where the first key is not an array.
            if (!thisSection[0] ) {
                 //console.log('!thisSection[0]'); 
                 return navigation; }
            if (thisSection[0].url.length === 0 ) { 
                //console.log('!n[0].url.length === 0'); 
                return navigation; }
        }


     }

    let newSection = cloneDeep(thisSection);

    if (sectionName === 'youtube') {
        //console.log('buildNavigationForWeb youtube:',Entity, sectionName );

        //navKeys is just an array of the keys found.  If the item already exists, do not duplicate
        let navKeys: string[] = [];
        //let navigation = [];
        Object.keys(newSection).forEach(key => {
            //console.log('buildNavigationForWeb youtube keys(newSection):',key );
            let navElements = [];

            if ( key === 'items' ) {

                navElements = newSection[key].map((item) => {
                    //console.log('buildNavigationForWeb 1a:',item );
                    if ( item.objectID.length === 0 && item.url.length === 0 ) { return null; } else {

                        let navKey = Entity.titleKey + '||||' + sectionName + '||||' + makeKeyFromString(item.NavTitle);
                        if ( navKeys.indexOf(navKey) > -1 ) { return null; } else {

                            navKeys.push(navKey);
                            let host = 'https://www.youtube.com/';

                            if ( item.objectType.toLowerCase().indexOf('channel') > -1 ) { host += 'channel/'; }
                            if ( item.objectType.toLowerCase().indexOf('playlist') > -1 ) { host += 'playlist?list='; }
                            if ( item.objectType.toLowerCase().indexOf('video') > -1 ) { host += 'watch?v='; }

                            return {
                                name: item.NavTitle,
                                key:   navKey,
                                url: host + item.objectID,
                                onClick: onNavClick,
                                mediaSource: sectionName,
                                objectType: item.objectType,
                                objectID: item.objectID,
            
                            };
                        }
                    }

                });
                //console.log('buildNavigationForWeb youtube navElements:',navElements );

                //Need to remove any null items from array before adding to navigation or they make spaces in nav
                //https://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript
                navigation = navigation.concat(

                    //navElements.filter(function (el) {
                    //    return el != null;
                    //})

                    //.filter((duration) => duration >= 2)

                    navElements.filter((el) => el !== null)
                );

            //This section can be removed once 'items' is coded
            } else if ( key === 'channels' || key === 'playLists' ) {
                navElements = newSection[key].map((item) => {
                    //console.log('buildNavigationForWeb 1a:',item );
                    if ( item.objectID.length === 0 && item.url.length === 0 ) { return null; } else {

                        let navKey = Entity.titleKey + '||||' + sectionName + '||||' + makeKeyFromString(item.NavTitle);
                        if ( navKeys.indexOf(navKey) > -1 ) { return null; } else {

                            navKeys.push(navKey);
                            let host = 'https://www.youtube.com/';
                            if ( key === 'channels') { host += 'channel/'; }
                            if ( key === 'playLists') { host += 'playlist?list='; }
        
                            return {
                                name: item.NavTitle,
                                key:   navKey,
                                url: host + item.objectID,
                                onClick: onNavClick,
                                mediaSource: sectionName,
                                objectType: item.objectType,
                                objectID: item.objectID,
            
                            };
                        }
                    }

                });
                //console.log('buildNavigationForWeb youtube navElements:',navElements );

                //Need to remove any null items from array before adding to navigation or they make spaces in nav
                //https://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript
                navigation = navigation.concat(
                    //navElements.filter(function (el) {
                    //    return el != null;
                    //})
                    //.filter((duration) => duration >= 2)
                    //https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209
                    navElements.filter((el) => el !== null)
                );

                //console.log('buildNavigationForWeb youtube navigation1:',navigation );                
            } else if ( key === 'user' && newSection[key].length > 0 ) {

                let navKey = Entity.titleKey + '||||' + sectionName + '||||' + newSection[key] + 'YouTubeUploadChannel';
                let host = 'https://www.youtube.com/user/';

                navigation = navigation.concat(
                    {   name: Entity.Title + '`s Youtube Channel',
                        key:   navKey,
                        url: host + newSection[key],
                        onClick: onNavClick,
                        mediaSource: sectionName,
                        objectType: 'user',
                        objectID: newSection[key],
                    }
                );

            }
            //console.log('buildNavigationForWeb youtube navigation2:',navigation );  
        });
        //console.log('buildNavigationForWeb youtube navigation3:',navigation );  

    } else if (sectionName !== 'debug') {
        //console.log('sectionName: ', sectionName);
        //console.log('newSection: ', newSection);

        if ( NonArrayNodes.indexOf(sectionName) > -1 ) {
            let objectID = newSection.objectID;
            let url = newSection.url;

            //If there is no object ID or URL, return empty since there is no facebook info
            if ( !objectID && !url ) { return navigation; }

            //objectID is not filled out, try to get from url.
            let obj = getPropsFromObjectInfo(newSection.NavTitle, sectionName, null, objectID, url);

            return {
                name: obj.NavTitle,
                key: Entity.titleKey + '||||' + sectionName + '||||' + makeKeyFromString(obj.NavTitle),
                url: obj.url,
                onClick: onNavClick,
                mediaSource: sectionName,
                objectType: 'user',
                objectID: obj.objectID,
            };

        } else { //This is expected to be an array like websites

            //navElements.filter((el) => el !== null)
            //navigation = newSection.map((item) => {
            navigation = [];

            
            //standardize web section titles
            if ( sectionName.toLowerCase().indexOf('web') > -1 ) { sectionName = 'web'; }
            
            for (let item of newSection){
                let tempNav = null;
                if (item.NavTitle.length > 0 || item.url.length > 0 ){
                    tempNav = {
                        name: item.NavTitle,
                        key:   Entity.titleKey + '||||' + sectionName + '||||' + makeKeyFromString(item.NavTitle),
                        url: item.url,
                        onClick: onNavClick,
                        mediaSource: sectionName,
                        objectType: sectionName,
                        objectID: item.objectID,
                    };
                    navigation.push(tempNav);
                }
            }

        }

    } else {
        navigation = [{
            name: 'Share Me',
            key:   Entity.titleKey + '||||' + sectionName + '||||' + Entity.titleKey,
            url:   null,
            onClick: onNavClick,
            mediaSource: sectionName,
            objectID: 'the Cat Jumped over the Moon!',
            objectType: 'JSON',
        }];
    }
    //console.log('buildNavigationForWeb youtube navigation4:',navigation );  
    return navigation;

}


/**
 * getPropsFromObjectInfo() takes a partial nav element and fills in the blanks with objectID and urls.
 * @param NavTitle 
 * @param mediaSource 
 * @param objectType 
 * @param objectID 
 * @param url 
 */
export function getPropsFromObjectInfo(NavTitle: string, mediaSource: string, objectType:string, objectID: string, url: string) {
    
    if (NavTitle == null ) { NavTitle = ''; }
    if (mediaSource == null ) { mediaSource = ''; }
    if (url == null ) { url = ''; }
    if (objectType == null ) { objectType = ''; }
    if (objectID == null ) { objectID = ''; }
    if (url == null ) { url = ''; }

    //Standardize keys
    if (mediaSource.indexOf('web') > -1) { mediaSource = 'webSites'; }

    if ( objectID.length === 0 ) { 

        if ( url.length > 0 ) { 
            //Can't get this regex to work :(    [^/]+(?=/$|$)     https://stackoverflow.com/a/8798292
            //Remove last / from url 
            objectID = url.slice(-1) === '/' ? url.slice(0, -1) : url; //
            //Then get accountName from previous /
            objectID = objectID.slice(objectID.lastIndexOf('/') + 1 );
            //console.log('facebook objectID: ', objectID);
        }

    } else if ( url.length === 0 && objectID.length > 0 ) { 
            //    let NonArrayNodes = ['facebook','twitter','stackExchange','linkedIn','github','instagram'];

        if ( mediaSource === 'facebook' ){
            url = 'https://www.facebook.com/';

        } else if ( mediaSource === 'twitter' ){
            url = 'https://www.twitter.com/';

        } else if ( mediaSource === 'stackExchange' ){
            url = 'https://sharepoint.stackExchange.com/users/401/';
            
        } else if ( mediaSource === 'github' ){
            url = 'https://github.com/';
            
        } else if ( mediaSource === 'instagram' ){
            url = 'https://www.instagram.com/';
            
        } else if ( mediaSource === 'linkedIn' ){
            url = 'https://www.linkedin.com/in/';

        } else if ( mediaSource.indexOf('wikipedia') > -1 ){
            url = 'https://en.wikipedia.org/wiki/';

        }

        url += objectID;

    }

    let obj = {
        NavTitle: NavTitle,
        mediaSource: mediaSource,
        objectType: objectType,
        objectID: objectID,
        url: url,        
    };

    return obj;


}

function makeKeyFromString(str : string){

    let result = "";
    result = str.replace(" ", "");
    return result;

}

export function  addOtherProps(Entity : IEntity, onNavClick , source: string) {

    let result : IEntity = cloneDeep(Entity);
    result.titleKey = makeKeyFromString(result.Title);
    result.source = source;
    Entity.titleKey = result.titleKey;
    if ( result.keywords.indexOf(result.Title) < 0) { result.keywords.push(result.Title);}

    result.navigation = [];
    //let blog = buildNavigationForWeb(Entity.blog, 'blog');
    //console.log('blog', blog);
    
    /**
     * NOTE TO ADD A NEW "NODE" Or Key in the object, do the following
     *  Update IEntity type in main State:  \components\ISocialiis7State.ts
     *  Create an Icon if you want one in the Footprint... \components\Icons.ts 
     *  Add it here so it will get built into the Navigation elements
     *  Add in buildNavigationForWeb()
     *      then if it's of type IWeb (Not IWeb[] ): add to  ---->  NonArrayNodes
     *  Then update about.aspx to determine what gets displayed in the about pane.
     */
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'home', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'office365', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'blog', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'webSites', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'twitter', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'linkedIn', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'instagram', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'facebook', onNavClick));
    //console.log('Navigation B4 Youtube',result.navigation);
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'youtube', onNavClick));
    //console.log('Navigation B4 After',result.navigation);
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'github', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'stackExchange', onNavClick));

    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'location', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'stock', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'wikipedia', onNavClick));
    result.navigation = result.navigation.concat(buildNavigationForWeb(Entity, 'debug', onNavClick));

    if ( result.keywordsText == null && result.keywords && result.keywords.length > 0  ){
        result.keywordsText = result.keywords.join(';');
    }

    result.footPrint = [];
    for (let ele of result.navigation) {
        let media = ele.mediaSource.toLowerCase();
        if (result.footPrint.indexOf(media) < 0 ) { result.footPrint.push(media);}
    }
    
    let aboutNav : INavLink[] = null;
    
    if ( result.profilePic && result.profilePic.length > 0 ) {
        aboutNav = [{
            name: 'Profile',
            url: result.profilePic,
            key: result.titleKey + '||||' + ' profile' + '||||' + makeKeyFromString(result.Title),
            mediaSource: 'profile',
            onClick: onNavClick,
        }];
        result.navigation = aboutNav.concat(result.navigation);
    }

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

