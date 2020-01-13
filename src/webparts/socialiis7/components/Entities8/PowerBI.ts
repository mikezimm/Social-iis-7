
import { IEntity } from '../ISocialiis7Props';

export function PowerBI(){

    const entity :IEntity = {
      title: 'PowerBI', //
      keywords: ["MSOffice","PowerBI","Online"],
      profilePic: "",
      blog: [
        {
          title: 'Blog',
          order: 1, //For Sorting
          url: 'https://powerbi.microsoft.com/en-us/blog/',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      twitter: 
        {
          title: 'Twitter',
          order: 1, //For Sorting
          url: 'https://twitter.com/MSPowerBI',
          codeType: 'TBD', //Used to determine what functions to have avaialble
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
          title: 'PowerBI on Github',
          order: 1, //For Sorting
          url: 'https://github.com/PowerBI',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ,  // End github
      webSites: [
        {
          title: 'PowerBI.com',
          order: 1, //For Sorting
          url: 'https://community.powerbi.com/ ',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      youtube: {
        title: 'YouTube',
        user: 'mspowerbi', //Youtube User (from URL)
        order: 0, //For Sorting
        channels: [
          {
            title: '',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            objectUrl: '', // to be used as generic link if no API key is given
          },{
            title: '',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            objectUrl: '', // to be used as generic link if no API key is given
          }
        ], // End YouTube channels
        playLists: [
          {
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
        ] // End YouTube playlists
      }, // End YouTube
  
  
    };
  
      //instagram:any,
      //facebook: any,
      //github: any,
      //androidStore: any,
      //appleStore: any,

      return entity;
      
  }