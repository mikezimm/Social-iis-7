
import { IEntity } from '../ISocialiis7Props';

export function MineCraft(){

  const entity :IEntity = {
    title: 'MineCraft', //
    keywords: ["PC","Gaming","OpenWorld","Builder","MultiPlayer"], // Can be any number of
    profilePic: "https://www.westbuxtonpubliclibrary.org/wp-content/uploads/2018/09/0fe20042-0bb8-4781-82f4-7130f928b021.jpg?w=1400",
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
        title: '',
        order: 1, //For Sorting
        url: '',
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
      title: 'DanTDM',
      user: 'TheDiamondMinecart', //Youtube User (from URL)
      order: 0, //For Sorting
      items: [
        {
          title: '',
          objectType: 'User', //user,Channel, Playlist, Videos, Video
          objectID: 'stampylonghead', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        },{
          title: '',
          objectType: 'Channel', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        },{
          title: 'Stampy\'s Lovely World',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: 'PLEZiAg2bYC7ngh-_Z_ruvzSfn1KPQRL5V', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        },{
          title: 'Stampy\'s Funland',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: 'PLEZiAg2bYC7nOHBB_VqGYe1CdaYD-eorq',
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