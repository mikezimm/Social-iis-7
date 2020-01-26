
import { IEntity } from '../ISocialiis7Props';

export function Jeep(){

  const entity :IEntity = {
    Title: 'Jeep', //
    keywords: ["Auto","FCA","North America","Trucks","Gas","Brand"], // Can be any number of
    profilePic: "https://www.fcagroup.com/PublishingImages/Brands/Jeep/hero-jeep_4.jpg",
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
        NavTitle: 'Twitter for Jeep',
        order: 1, //For Sorting
        url: 'https://twitter.com/jeep',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End twitter
    facebook: 
    {
      NavTitle: 'FaceBook Jeep',
      order: 1, //For Sorting
      url: 'https://www.facebook.com/jeep',
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
    webSites: [
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    youtube: {
      NavTitle: 'The Jeep Channel',
      user: 'thejeepchannel', //Youtube User (from URL)
      order: 0, //For Sorting
      items: [
        {
          NavTitle: '',
          objectType: 'Channel', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: '',
          objectType: 'Video', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: 'World Surf League Locals Tour',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: 'PLvULN5PwSSrt4iuIfcSO4FX_yLdW7gkzi', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: '',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        }
      ] // End YouTube items
    }, // End YouTube
    instagram: 
        {
          NavTitle: 'Jeep Instagram',
          order: 1, //For Sorting
          url: 'https://www.instagram.com/jeep/',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        }
      ,


    

  };

    //instagram:any,
    //facebook: any,
    //github: any,
    //androidStore: any,
    //appleStore: any,

    return entity;
    
}