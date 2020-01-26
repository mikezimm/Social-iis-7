
import { IEntity } from '../ISocialiis7Props';

export function Lions(){

  const entity :IEntity = {

      Title: 'Lions', //
      keywords: ["ttp","Animals","Africa"],
      profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1024px-Lion_waiting_in_Namibia.jpg",
      wikipedia:
      {
        NavTitle: 'Lions Wikipedia',
        order: 1, //For Sorting
        url: 'https://en.wikipedia.org/wiki/Lion',
        objectType: '', //Used to determine what functions to have avaialble
      },  // End wikipedia
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
            NavTitle: 'YouTube for Lions',
            objectType: 'Video', //user,Channel, Playlist, Videos, Video
            objectID: '5oqtcM0Y7Jo', //Used to determine what functions to have avaialble
            url: '', // to be used as generic link if no API key is given
          },{
            NavTitle: '',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            url: '', // to be used as generic link if no API key is given
          }
        ], // End YouTube items

      }, // End YouTube


    };

      //instagram:any,
      //facebook: any,
      //github: any,
      //androidStore: any,
      //appleStore: any,

      return entity;

  }
