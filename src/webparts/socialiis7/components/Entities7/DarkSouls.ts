
import { IEntity } from '../ISocialiis7Props';


export function DarkSouls(){

    const entity :IEntity = {
      title: 'Dark Souls', //
      keywords: ["ttp","Gaming","RPG","Multiplayer"],
      profilePic: "https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg",
      blog: [
        {
          title: '',
          order: 1, //For Sorting
          url: '',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      twitter:
        {
          title: '@DarkSoulsGame',
          order: 1, //For Sorting
          url: 'https://twitter.com/DarkSoulsGame',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ,  // End twitter
      facebook:
      {
        title: 'Dark Souls Community',
        order: 1, //For Sorting
        url: 'https://www.facebook.com/darksoulsEU/?brand_redir=163714144280778',
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
          title: 'Dark Souls',
          order: 1, //For Sorting
          url: 'https://en.wikipedia.org/wiki/Dark_Souls',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      youtube: {
        title: 'YouTube',
        user: '', //Youtube User (from URL)
        order: 0, //For Sorting
        items: [
          {
            title: 'Your video',
            objectType: 'video', //user,Channel, Playlist, Videos, Video
            objectID: '6u2w7kzmweU', //Used to determine what functions to have avaialble
            objectUrl: '', // to be used as generic link if no API key is given
          },
          {
            title: 'Dark Souls Walkthrough',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh', //Used to determine what functions to have avaialble
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
