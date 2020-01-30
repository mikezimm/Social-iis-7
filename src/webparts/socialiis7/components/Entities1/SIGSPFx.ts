
import { IEntity } from '../ISocialiis7Props';

export function SIGSPFx(){

    const entity :IEntity = {
      Title: 'SIG SPFx', //
      keywords: ["SIG","MSOffice","SharePoint","SPFx"],
      profilePic: "https://developer.microsoft.com/en-us/office/blogs/wp-content/uploads/2020/01/Slide2-900x360.png",
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
            NavTitle: 'SPFx call playlist',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLR9nK3mnD-OXdcwfcHGsGr78nHWLRsv1x', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/playlist?list=PLR9nK3mnD-OXdcwfcHGsGr78nHWLRsv1x', // to be used as generic link if no API key is given
          },{
            NavTitle: 'SharePoint Pnp Community Channel',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: 'UC_mKdhw-V6CeCM7gTo_Iy7w', //Used to determine what functions to have avaialble
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