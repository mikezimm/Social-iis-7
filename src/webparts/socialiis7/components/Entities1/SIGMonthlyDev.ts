
import { IEntity } from '../ISocialiis7Props';

export function SIGMonthlyDev(){

    const entity :IEntity = {
      Title: 'SIG Monthly', //
      keywords: ["SIG","SharePoint","SPFx"],
      profilePic: "https://developer.microsoft.com/en-us/sharepoint/blogs/wp-content/uploads/2019/12/Thumbnail-Dec-10-Gen-900x360.png",
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
            NavTitle: '',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            url: '', // to be used as generic link if no API key is given
          },{
            NavTitle: 'Monthly Dev playlist',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLR9nK3mnD-OVC4_ut9bUi6ffRXLVuF0_g', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/playlist?list=PLR9nK3mnD-OVC4_ut9bUi6ffRXLVuF0_g', // to be used as generic link if no API key is given
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