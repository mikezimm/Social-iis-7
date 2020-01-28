import { Web } from "@pnp/sp/presets/all";

import { ISocialiis7Props, ITopics, IEntity } from '../webparts/socialiis7/components/ISocialiis7Props';
import { ISocialiis7State,} from '../webparts/socialiis7/components/ISocialiis7State';
import { Nav, INavLink } from 'office-ui-fabric-react/lib/Nav';
import { ITheTime } from './dateServices';
import { resultContent } from "office-ui-fabric-react/lib/components/FloatingPicker/PeoplePicker/PeoplePicker.scss";

export function getBrowser(validTypes,changeSiteIcon){

    let thisBrowser = "";
    return thisBrowser;

}

/**
 * Be sure to update your analyticsList and analyticsWeb in en-us.js strings file
 * @param theProps 
 * @param theState 
 */
export function saveAnalytics (theProps: ISocialiis7Props,theState: ISocialiis7State, success: string, consoleNote: string) {

    console.log('saveAnalytics Location: ' + consoleNote);
    //Do nothing if either of these strings is blank
    if (!theProps.analyticsList) { return ; }
    if (!theProps.analyticsWeb) { return ; }

    if (  theProps.analyticsWeb.indexOf(theProps.tenant) === -1 ) {
        //The current site is not in the expected tenant... skip analytics.
        console.log('the analyticsWeb is not in the same tenant...',theProps.analyticsWeb,theProps.tenant);
        return ;

    } else if ( theState.selectedEntity == null ) { return ;
    } else if ( theState.lastEvent === 'Not Loaded' ) { console.log('saveAnalytics Not Loaded',theProps,theState);
    } else if ( !theState.endTime ) { //console.log('EndTime not available yet',theState);
    } else if ( success.indexOf('Error') > -1  && !theProps.analyticsError ) { console.log('saveAnalytics Errors disabled',theProps,theState);
    } else if ( theState.lastEvent === 'Constructor' && !theProps.analyticsLoad ) { console.log('saveAnalytics Constructor disabled',theProps,theState);
    } else if ( theState.lastEvent === 'Entity Click' && !theProps.analyticsEntity ) { console.log('saveAnalytics Entity disabled',theProps,theState);
    } else if ( theState.lastEvent === 'Nav Click' && !theProps.analyticsNav ) { console.log('saveAnalytics Nav disabled',theProps,theState);
    } else {

        //console.log('saveAnalytics: ', theProps, theState);
        let analyticsList = theProps.analyticsList;
        let startTime: ITheTime = theProps.startTime;
        let endTime: ITheTime = theState.endTime;

        const web = Web(theProps.analyticsWeb);
        const delta = endTime.milliseconds - startTime.milliseconds;
        //alert(delta);
        //alert(getBrowser("Chrome",false));
        /*

        */
        let siteLink = {
            'Url': theProps.pageContext.web.serverRelativeUrl,
            'Description': theProps.pageContext.web.serverRelativeUrl ,
        };
        
        let itemInfo1 = theProps.topics.mainTopic;
        let itemInfo2 = theProps.topics.subTopic1 + ';' + theProps.topics.subTopic2 + ';' + theProps.topics.subTopic3;

        let Entity = theState.selectedEntity.Title;
        let NavItem = theState.selectedNavItem.key;
        let KeyWords = theState.selectedEntity.keywords.join(';');
    
        web.lists.getByTitle(analyticsList).items.add({
            'Title': ['Socialiis',theState.lastEvent].join(' : '),
            'zzzText1': startTime.now,
            'Setting': theState.lastEvent,
            'Result': success,
            'zzzText2': startTime.theTime,
            'zzzNumber1': startTime.milliseconds,
            'zzzText3': endTime.now,      
            'zzzText4': endTime.theTime,
            'zzzNumber2': endTime.milliseconds,
            'zzzNumber3': delta,
            'zzzText5': itemInfo1,
            'zzzText6': itemInfo2,
            'zzzText7': Entity,
            'zzzText8': NavItem,
            'zzzText9': KeyWords,
            'SiteLink': siteLink,
            'SiteTitle': theProps.pageContext.web.title,
            'ListTitle': '',


            }).then((response) => {
            //Reload the page
                //location.reload();
            }).catch((e) => {
            //Throw Error
                alert(e);
        });

    }



}


export function saveAnalyticsX (theTime) {

    let analyticsList = "TilesCycleTesting";
    let currentTime = theTime;
    const web = Web('https://mcclickster.sharepoint.com/sites/Templates/SiteAudit/');

    web.lists.getByTitle(analyticsList).items.add({
        'Title': 'Pivot-Tiles x1asdf',
        'zzzText1': currentTime.now,      
        'zzzText2': currentTime.theTime,
        'zzzNumber1': currentTime.milliseconds,

        }).then((response) => {
        //Reload the page
            //location.reload();
        }).catch((e) => {
        //Throw Error
            alert(e);
    });


}

export function saveTheTime () {
    let theTime = getTheCurrentTime();
    saveAnalyticsX(theTime);

    return theTime;

}

export function getTheCurrentTime () {

    const now = new Date();
    const theTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "." + now.getMilliseconds();
    let result : any = {
        'now': now,
        'theTime' : theTime,
        'milliseconds' : now.getMilliseconds(),
    };

    return result;

}
