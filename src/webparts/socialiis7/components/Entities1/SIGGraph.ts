
import { IEntity } from '../ISocialiis7Props';


export function SIGGraph(){

  const entity :IEntity = {
    Title: 'SIG Graph', //
    keywords: ["SIG","MSOffice","Online","MSGraph"], // Can be any number of
    profilePic: "",
    blog: [
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    twitter: 
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      } ,  //  End twitter
    facebook: 
    {
      NavTitle: '',
      order: 1, //For Sorting
      url: '',
      objectType: 'TBD', //Used to determine what functions to have avaialble
    } ,  //  End facebook
    linkedIn: 
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      } ,  //  End linkedIn
    github: 
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      } ,  //  End github
    webSites: [
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    youtube: {
      NavTitle: 'YouTube',
      user: '', //Youtube User (from URL)
      order: 0, //For Sorting
      items: [
        {
          NavTitle: '',
          objectType: 'Video', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: '',
          objectType: 'Channel', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: 'Graph Community Calls',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: 'PLWZJrkeLOrbabneRhISU-N7uK4PvVy-jV', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
            NavTitle: 'Getting started with Graph',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLWZJrkeLOrbY-OrrFV_oKezJ9O86oMNrf', //Used to determine what functions to have avaialble
            url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: 'Graph Developer Training',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: 'PLWZJrkeLOrbadEAXLIxYkkWxQBHiapCss', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        }
      ] // End YouTube items
    }, // End YouTube


  };

    //instagram:any,
    //facebook: any,
    //github: any,
    //androidStore: any,
    //appleStore: any,

    return entity;
    
}