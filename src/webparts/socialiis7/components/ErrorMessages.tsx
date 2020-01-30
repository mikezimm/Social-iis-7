//Originally copied from PivotTiles.ErrorMessages.tsx

import {  } from '@microsoft/sp-webpart-base';

import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import styles from './Socialiis7.module.scss';
import Utils from './utils';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

import { ISocialiis7Props, ITopics, IEntity } from './ISocialiis7Props';
import {IUser, ISocialiis7State, IMyPivots, IPivot, ILoadData, IListEntities} from './ISocialiis7State';

//export default class NoListFound extends React.Component<IPivotTilesProps, IPivotTilesState> {


export function buildTips(parentProps: ISocialiis7Props,parentState: ISocialiis7State){

  const currentPageUrl = parentProps.pageContext.web.absoluteUrl + parentProps.pageContext.site.serverRequestPath;

  let delta : any;
  let statsMessage : string = 'Could not determine load time.';
  let startTime = parentProps.startTime;
  if (parentState.endTime) {
    let endTime = parentState.endTime;
    delta = endTime.milliseconds - startTime.milliseconds;
    statsMessage = parentState.loadData.allEntities.length.toString() + ' items found in ' + delta + ' milliseconds';
  }
 
//          <div className={(parentProps.showHero === true && parentProps.heroType !== "none" && parentState.heroStatus === "none") ? styles.showErrorMessageNoPad : styles.hideMe }>
  let masterEntitiesLength = parentState.loadData.masterEntities? parentState.loadData.masterEntities.length : 0;
  let masterEntityTitles = masterEntitiesLength > 0 ? parentState.loadData.masterEntityTitles.join('; ') : "";


  let localEntitiesLength = parentState.loadData.localEntities? parentState.loadData.localEntities.length : 0;
  let localEntityTitles = localEntitiesLength > 0 ? parentState.loadData.localEntityTitles.join('; ') : "";

  let allTopics = parentState.loadData.allTopics.join('; ');
  let keysForTopic = parentState.loadData.keysForTopic.join('; ');

  //arrow function courtesy of:  https://stackoverflow.com/a/47018466/4210807
  let otherTopics = parentState.loadData.allTopics.filter( x => !parentState.loadData.keysForTopic.filter( y => y === x).length).join('; ');

  //console.log('masterEntitiesLength',masterEntitiesLength,masterEntityTitles,localEntitiesLength,localEntityTitles);

  //if ( masterEntitiesLength === 0 && localEntitiesLength == 0 ) {  return '';  }
  console.log('ErrorMessage');
  const theseTips = 
  <div className={styles.showErrorMessageNoPad}>
      <div className={ (parentState.showTips === "yes" ) ? styles.showErrorMessage : styles.hideMe }>

        <h1>Topic Info - If you don't see anything interesting...</h1>
        <ol>
            <li>Open Page 2 of the Webpart Properties (if they are not already opened)</li>
            <li>Select the Main Topic Dropdown</li>
            <li>Or Type in one of these topics in the Main Topics property box</li>
            
        </ol>
        <ul><li>Press the Question Mark Icon in upper right to hide Topic Info</li></ul>
        
        <div className={styles.showErrorMessageNoPad }>
            <h3 className={''}>SubTopics available for current Main Topic: {parentProps.topics.mainTopic}</h3>
                <p>{keysForTopic}</p>
            <h3 className={''}>Other Available Topics:</h3>
                <p>{otherTopics}</p>
        </div>

          <div className={(parentProps.useMasterList && masterEntitiesLength > 0) ? styles.showErrorMessageNoPad : styles.hideMe }>

            <h3 className={''}>Master Entity List:</h3>
            <p><Link href={parentProps.masterListURL} 
                target="_blank">
                {parentProps.masterListURL}
                </Link></p>
            <p>{masterEntitiesLength} Entities: {masterEntityTitles}</p>

          </div>

          <div className={(parentProps.useLocalList && localEntitiesLength > 0) ? styles.showErrorMessageNoPad : styles.hideMe }>
            <h3 className={''}>Local Entity List:</h3>
            <p><Link href={parentProps.localListURL} 
                target="_blank">
                {parentProps.localListURL}
                </Link></p>
            <p>{localEntitiesLength} Entities: {localEntityTitles}</p>

          </div>

      </div>
  </div>;

  return theseTips;
}

export function LoadingSpinner(parentState: ISocialiis7State){
  const loadingSpinner = 
  <div className={styles.rowNoPad}>
  <div className={parentState.loadStatus === "Loading" ? styles.showErrorMessage : styles.hideMe }>
    <Spinner size={SpinnerSize.small} />
  </div>
  </div>;

  return loadingSpinner;
}

export function NoListFound (parentProps: ISocialiis7Props,parentState: ISocialiis7State) {
//  console.log('NoListFound');
//  console.log(parentProps);

    const fixedURL = Utils.fixURLs(parentProps.localListURL, parentProps.pageContext);

    const errMessage = SanitizeErrorMessage(parentState.loadError);

    const noListFound = 
    <div className={styles.rowNoPad}>
      <div className={parentState.loadStatus === "ListNotFound" ? styles.showErrorMessage : styles.hideMe }>
          <h1>We had a problem getting your data: {parentProps.localListURL}</h1>
          {errMessage}
          Check your site contents for list:  <Link href={fixedURL + "_layouts/15/viewlsts.aspx"} target="_blank">{fixedURL}</Link>
          <h2>Other common causes for this message</h2>
          <h3>You do not have permissions to the list :(</h3>
          <p>Please contact your site admin for assistance!</p>
      </div>
    </div>;


      return noListFound;
}


export function NoItemsForTopics (parentProps: ISocialiis7Props,parentState: ISocialiis7State) {
  //  console.log('NoListFound');
  //  console.log(parentProps);
  
      const fixedURL = Utils.fixURLs(parentProps.localListURL, parentProps.pageContext);
  
      const errMessage = SanitizeErrorMessage(parentState.loadError);

      const primaryFilter = parentState.topics.mainTopic;
      const subTopics = [parentState.topics.subTopic1,parentState.topics.subTopic2, parentState.topics.subTopic3].join('; ');

      const noItemsFound = 
      <div className={styles.rowNoPad}>
        <div className={parentState.loadStatus === "NoItemsForTopics" ? [styles.showErrorMessage, styles.showTextRed].join(' ') : styles.hideMe }>
          <p>{parentState.loadError}</p>
          <h1>No items were found with these topics: </h1>
          <h3> - Main topic (required): { primaryFilter }</h3>
          <h3> - combined with at least one of these topics: { subTopics } </h3>
          {errMessage}
          <p>You can also get this message if you do not have permissions to the list.</p>
        </div>
      </div>;
  
    
        return noItemsFound;
  }

export function NoItemsFound (parentProps: ISocialiis7Props,parentState: ISocialiis7State) {
//  console.log('NoListFound');
//  console.log(parentProps);

    const fixedURL = Utils.fixURLs(parentProps.localListURL, parentProps.pageContext);

    const errMessage = SanitizeErrorMessage(parentState.loadError);

    const noItemsFound = 
    <div className={styles.rowNoPad}>
      <div className={parentState.loadStatus === "NoItemsFound" ? styles.showErrorMessage : styles.hideMe }>
        <p>{parentState.loadError}</p>
        <h1>No items were found in your tile list: { }</h1>
        {errMessage}
        <p>This is the filter we are using: <b>{ }</b></p>
        <p>Looking here:</p>
        <p><Link href={fixedURL } 
            target="_blank">
            {fixedURL }
          </Link></p>
        <p>You can also get this message if you do not have permissions to the list.</p>
      </div>
    </div>;

  
      return noItemsFound;
}

export function SanitizeErrorMessage(errIn) {

  let err = JSON.stringify(errIn);
  if (errIn === "") {
    return "";
  }
  if (err == null ) {
    return "";
  }
  let errValue = "";
  let errType = "";
  if (err.indexOf("[400]") > 0 ) {
    errType = "[400] Bad Request?";

  } else if  (err.indexOf("[403]") > 0 ) {
    errType = "[403] Insufficient Permissions?";

  } else if  (err.indexOf("[500]") > 0 ) {
    errType = "[500] Internal Server Error?";

  } else if  (err.indexOf("[503]") > 0 ) {
    errType = "[503] Server Busy?";

  } 

  let messStart = err.indexOf('message');

  if (messStart > 0 ) {
    let valueStart = err.indexOf('value',messStart);
    if (err.indexOf('value',valueStart) > 0 ) {
      errValue = err.slice(valueStart + 9, valueStart + 1000);
      errValue = errValue.replace(/[}]/g,'').replace(/[\/]/g,'').replace(/[\"\\]/g,'');
    } else {
      errValue = err;
    }
  }

  const thisError = 
    <div>
      <h2>{errType}</h2>
      <p><mark>{errValue}</mark></p>
      <p></p>
    </div>;

    return thisError;

}