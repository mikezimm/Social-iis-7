
import { IEntity } from '../ISocialiis7Props';

export function Autoliv(){

  const entity :IEntity = {
    Title: 'Autoliv', //
    keywords: ["Auto","Global","Tier1","Passive","AB","SB","SW","ALV"], // Can be any number of
    profilePic: "https://www.autoliv.com/sites/default/files/banner-contents/Crash-Test-Dummy-Closeup_3.jpg",
    home: 
      {
        NavTitle: 'Autoliv.com',
        order: 1, //For Sorting
        url: 'https://www.autoliv.com/',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,
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
        NavTitle: '@Autoliv on Twitter',
        order: 1, //For Sorting
        url: 'https://twitter.com/AutolivInc',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End twitter
    facebook:
    {
      NavTitle: 'FaceBook',
      order: 1, //For Sorting
      url: 'https://www.facebook.com/AutolivInc',
      objectType: 'TBD', //Used to determine what functions to have avaialble
      objectID: 'AutolivInc'
    },  // End facebook
    linkedIn:
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End linkedIn
    wikipedia: 
    {
      NavTitle: 'Wikipedia',
      order: 1, //For Sorting
      url: 'https://en.wikipedia.org/wiki/Autoliv',
      objectType: 'TBD', //Used to determine what functions to have avaialble
    }
,  // End wikipedia
    github:
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End github
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
          NavTitle: 'Autoliv YouTube Channel',
          objectType: 'Channel', //user,Channel, Playlist, Videos, Video
          objectID: 'UCpRLWz7tuZ42lUhKMGV_74Q', //Used to determine what functions to have avaialble
          url: 'https://www.youtube.com/channel/UCpRLWz7tuZ42lUhKMGV_74Q', // to be used as generic link if no API key is given
        },{
          NavTitle: '',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: '',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
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