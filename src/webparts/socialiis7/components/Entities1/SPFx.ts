
import { IEntity } from '../ISocialiis7Props';


export function SPFx(){

  const entity :IEntity = {
    Title: 'SPFx', //
    keywords: ["MSOffice","SPFx","SharePoint","Developer"], // Can be any number of
    profilePic: "",
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
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      } ,  //  End twitter
    facebook: 
    {
      NavTitle: '',
      order: 1, //For Sorting
      url: '',
      objectType: 'TBD', //Used to determine what functions to have avaialble
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
          NavTitle: 'Getting started with SPFx',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: 'PLR9nK3mnD-OV-RPXQ3Lco845qoEy7VJoc', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: 'SPFx Tutorials',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: 'PLR9nK3mnD-OXvSWvS2zglCzz4iplhVrKq', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
            NavTitle: 'SPFx Extensions Tutorials',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLR9nK3mnD-OXtWO5AIIr7nCR3sWutACpV', //Used to determine what functions to have avaialble
            url: '', // to be used as generic link if no API key is given
        },{
            NavTitle: 'SPFx SIG playlist',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLR9nK3mnD-OXdcwfcHGsGr78nHWLRsv1x', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/playlist?list=PLR9nK3mnD-OXdcwfcHGsGr78nHWLRsv1x', // to be used as generic link if no API key is given
        },{
            NavTitle: 'SIG Monthly Dev playlist',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLR9nK3mnD-OVC4_ut9bUi6ffRXLVuF0_g', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/playlist?list=PLR9nK3mnD-OVC4_ut9bUi6ffRXLVuF0_g', // to be used as generic link if no API key is given
        },{
            NavTitle: 'SIG General Dev playlist',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLR9nK3mnD-OURfm5Ypu-wK52cxBv_gXCA', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/playlist?list=PLR9nK3mnD-OURfm5Ypu-wK52cxBv_gXCA', // to be used as generic link if no API key is given
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