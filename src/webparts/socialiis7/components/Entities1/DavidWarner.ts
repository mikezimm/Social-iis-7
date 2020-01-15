
import { IEntity } from '../ISocialiis7Props';

  export function DavidWarner(){

    const entity :IEntity = {
      title: 'David Warner', //
      keywords: ["MVP","SharePoint","SPFx"],
      profilePic: "http://warner.digital/resume/images/profile/davidwarner-headshot-001.jpg",
      blog: [
        {
          title: 'David\'s Blog',
          order: 1, //For Sorting
          url: 'http://warner.digital/',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      twitter: 
        {
          title: 'David Warner @Twitter',
          order: 1, //For Sorting
          url: 'https://twitter.com/DavidWarnerII',
          codeType: 'user', //Used to determine what functions to have avaialble
        }
      ,  // End twitter
      facebook: 
      {
        title: '',
        order: 1, //For Sorting
        url: '',
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
        user: '', //Youtube User (from URL)
        order: 0, //For Sorting
        items: [
          {
            title: '',
            objectType: 'Video', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            objectUrl: '', // to be used as generic link if no API key is given
          },{
            title: '',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            objectUrl: '', // to be used as generic link if no API key is given
          },{
            title: '',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            objectUrl: '', // to be used as generic link if no API key is given
          },{
            title: '',
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