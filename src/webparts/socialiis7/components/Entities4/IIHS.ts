
import { IEntity } from '../ISocialiis7Props';

export function IIHS(){

  const entity :IEntity = {
    Title: 'IIHS', //
    keywords: ["Auto","Industry","NA","North America"], // Can be any number of
    profilePic: "https://someURL.com",
    blog: [
      {
        NavTitle: 'Someone\'s Blog',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    twitter: 
      {
        NavTitle: 'Twitter',
        order: 1, //For Sorting
        url: 'https://twitter.com/iihs_autosafety',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End twitter
    facebook: 
    {
      NavTitle: 'Facebook',
      order: 1, //For Sorting
      url: 'https://www.facebook.com/iihs.org/',
      objectType: 'TBD', //Used to determine what functions to have avaialble
    }
    ,  // End facebook
    linkedIn: 
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End linkedIn
    github: 
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End github
    instagram: 
      {
        NavTitle: 'Instagram',
        order: 1, //For Sorting
        url: 'https://www.instagram.com/iihs_autosafety/',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      } ,  // End github
      wikipedia: 
        {
          NavTitle: 'Wikipedia',
          order: 1, //For Sorting
          url: 'https://en.wikipedia.org/wiki/Insurance_Institute_for_Highway_Safety',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        }
    ,  // End wikipedia
    webSites: [
      {
        NavTitle: 'IIHS-HLDI',
        order: 1, //For Sorting
        url: 'https://www.iihs.org',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      },{
        NavTitle: 'IIHS-HLDI Ratings',
        order: 1, //For Sorting
        url: 'https://www.iihs.org/ratings',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      },{
        NavTitle: 'IIHS-HLDI News',
        order: 1, //For Sorting
        url: 'https://www.iihs.org/news',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    youtube: {
      NavTitle: 'YouTube',
      user: 'iihs', //Youtube User (from URL)
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
      ] // End YouTube playlists
    }, // End YouTube


  };

    //facebook: any,
    //github: any,
    //androidStore: any,
    //appleStore: any,

    return entity;
    
}