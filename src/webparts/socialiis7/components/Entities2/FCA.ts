
import { IEntity } from '../ISocialiis7Props';

export function FCA(){

  const entity :IEntity = {
    Title: 'FCA', //
    keywords: ["Auto","Global","Cars","Trucks","Electric","Gas","OEM","FCA"], // Can be any number of
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
      } ,  //  End twitter
    facebook: 
    {
      NavTitle: 'FaceBook Jeep',
      order: 1, //For Sorting
      url: '',
      objectType: 'TBD', //Used to determine what functions to have avaialble
      objectID: 'fiat',
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