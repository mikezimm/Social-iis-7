
import { IEntity } from '../ISocialiis7Props';

export function SubNautica(){

  const entity :IEntity = {
    Title: 'SubNautica', //
    keywords: ["PC","Gaming","OpenWorld","Water","FirstPerson","Builder"], // Can be any number of
    profilePic: "https://steamcdn-a.akamaihd.net/steam/apps/264710/header.jpg?t=1572421550",
    blog: [
      {
        NavTitle: 'Someone\'s Blog',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    twitter: 
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End twitter
    facebook: 
    {
      NavTitle: '',
      order: 1, //For Sorting
      url: '',
      codeType: 'TBD', //Used to determine what functions to have avaialble
    }
    ,  // End facebook
    linkedIn: 
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End linkedIn
    github: 
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End github
    webSites: [
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
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
          objectUrl: '', // to be used as generic link if no API key is given
        },{
          NavTitle: '',
          objectType: 'Channel', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        },
        {
          NavTitle: '',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        },{
          NavTitle: '',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
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