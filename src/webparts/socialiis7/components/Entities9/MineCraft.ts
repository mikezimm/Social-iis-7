
import { IEntity } from '../ISocialiis7Props';

export function MineCraft(){

  const entity :IEntity = {
    Title: 'MineCraft', //
    keywords: ["PC","Gaming","OpenWorld","Builder","MultiPlayer"], // Can be any number of
    profilePic: "https://www.westbuxtonpubliclibrary.org/wp-content/uploads/2018/09/0fe20042-0bb8-4781-82f4-7130f928b021.jpg?w=1400",
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
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End twitter
    facebook: 
    {
      NavTitle: '',
      order: 1, //For Sorting
      url: '',
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
      NavTitle: '',
      user: '', //Youtube User (from URL)
      order: 0, //For Sorting
      items: [
        {
          NavTitle: 'Stampy\'s Channel',
          objectType: 'User', //user,Channel, Playlist, Videos, Video
          objectID: 'stampylonghead', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: 'DanTDM\'s Channel',
          objectType: 'User', //user,Channel, Playlist, Videos, Video
          objectID: 'TheDiamondMinecart', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: 'Stampy\'s Lovely World',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: 'PLEZiAg2bYC7ngh-_Z_ruvzSfn1KPQRL5V', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: 'Stampy\'s Funland',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: 'PLEZiAg2bYC7nOHBB_VqGYe1CdaYD-eorq',
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