
import { IEntity } from '../ISocialiis7Props';

export function Jeep(){

  const entity :IEntity = {
    title: 'Jeep', //
    keywords: ["Auto","FCA","North America","Trucks","Gas","Brand"], // Can be any number of
    profilePic: "https://www.fcagroup.com/PublishingImages/Brands/Jeep/hero-jeep_4.jpg",
    blog: [
      {
        title: 'Someone\'s Blog',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    twitter: 
      {
        title: 'Twitter for Jeep',
        order: 1, //For Sorting
        url: 'https://twitter.com/jeep',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End twitter
    facebook: 
    {
      title: 'FaceBook Jeep',
      order: 1, //For Sorting
      url: 'https://www.facebook.com/jeep',
      codeType: 'TBD', //Used to determine what functions to have avaialble
    }
    ,  // End facebook
    linkedIn: 
      {
        title: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End linkedIn
    github: 
      {
        title: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End github
    webSites: [
      {
        title: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    youtube: {
      title: 'YouTube',
      user: 'thejeepchannel', //Youtube User (from URL)
      order: 0, //For Sorting
      channels: [
        {
          title: 'The Jeep Channel',
          objectType: 'Channel', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          objectUrl: 'https://www.youtube.com/user/thejeepchannel', // to be used as generic link if no API key is given
        },{
          title: '',
          objectType: 'Channel', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        }
      ], // End YouTube channels
      playLists: [
        {
          title: 'World Surf League Locals Tour',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          objectUrl: 'https://www.youtube.com/playlist?list=PLvULN5PwSSrt4iuIfcSO4FX_yLdW7gkzi', // to be used as generic link if no API key is given
        },{
          title: '',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        }
      ] // End YouTube playlists
    }, // End YouTube
    instagram: 
        {
          title: 'Jeep Instagram',
          order: 1, //For Sorting
          url: 'https://www.instagram.com/jeep/',
          codeType: 'TBD', //Used to determine what functions to have avaialble
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