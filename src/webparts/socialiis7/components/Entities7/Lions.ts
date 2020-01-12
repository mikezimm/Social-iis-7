
import { IEntity } from '../ISocialiis7Props';

export function Lions(){

  const entity :IEntity = {

      title: 'Lions', //
      keywords: ["ttp","Animals","Africa"],
      profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1024px-Lion_waiting_in_Namibia.jpg",
      blog: [
        {
          title: 'Lions',
          order: 1, //For Sorting
          url: 'https://en.wikipedia.org/wiki/Lion',
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
        title: 'YouTube',
        user: '', //Youtube User (from URL)
        order: 0, //For Sorting
        channels: [
          {
            title: 'YouTube for Lions',
            objectType: 'Video', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            objectUrl: 'https://www.youtube.com/watch?v=5oqtcM0Y7Jo', // to be used as generic link if no API key is given
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
