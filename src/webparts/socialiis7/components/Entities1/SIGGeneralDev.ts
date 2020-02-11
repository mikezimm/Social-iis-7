
import { IEntity } from '../ISocialiis7Props';

export function SIGGeneralDev(){

    const entity :IEntity = {
      Title: 'SIG General', //
      keywords: ["SIG","SharePoint","SPFx"],
      profilePic: "https://developer.microsoft.com/en-us/office/blogs/wp-content/uploads/2019/03/sig-21st-video-900x360.png",
      blog: [
        {
          NavTitle: 'Blog',
          order: 1, //For Sorting
          url: 'https://developer.microsoft.com/en-us/sharepoint/blogs/',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      twitter: 
        {
          NavTitle: 'Twitter @SharePoint',
          order: 1, //For Sorting
          url: 'https://twitter.com/sharepoint',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        } ,  // End twitter
      facebook: 
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      } ,  // End facebook
      linkedIn: 
        {
          NavTitle: '',
          order: 1, //For Sorting
          url: '',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        } ,  // End linkedIn
      github: 
        {
          NavTitle: '',
          order: 1, //For Sorting
          url: '',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        } ,  // End github
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
            NavTitle: 'General Dev playlist',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLR9nK3mnD-OURfm5Ypu-wK52cxBv_gXCA', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/playlist?list=PLR9nK3mnD-OURfm5Ypu-wK52cxBv_gXCA', // to be used as generic link if no API key is given
          },{
            NavTitle: 'SharePoint Dev Weekly Playlist',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLR9nK3mnD-OVYI-St_CBiFfuL4CZbBpkC', //Used to determine what functions to have avaialble
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