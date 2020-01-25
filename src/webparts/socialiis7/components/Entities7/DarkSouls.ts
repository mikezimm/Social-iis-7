
import { IEntity } from '../ISocialiis7Props';


export function DarkSouls(){

    const entity :IEntity = {
      Title: 'Dark Souls', //
      keywords: ["ttp","Gaming","RPG","Multiplayer"],
      profilePic: "https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg",
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
          NavTitle: '@DarkSoulsGame',
          order: 1, //For Sorting
          url: 'https://twitter.com/DarkSoulsGame',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        } ,  // End twitter
      facebook:
      {
        NavTitle: 'Dark Souls Facebook Community',
        order: 1, //For Sorting
        url: 'https://www.facebook.com/darksoulsEU',
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
      wikipedia:
      {
        NavTitle: 'Dark Souls Wikipedia',
        order: 1, //For Sorting
        url: 'https://en.wikipedia.org/wiki/Dark_Souls',
        objectType: '', //Used to determine what functions to have avaialble
      },  // End wikipedia
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
            NavTitle: 'Your video',
            objectType: 'video', //user,Channel, Playlist, Videos, Video
            objectID: '6u2w7kzmweU', //Used to determine what functions to have avaialble
            url: '', // to be used as generic link if no API key is given
          },
          {
            NavTitle: 'Dark Souls Walkthrough',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh', //Used to determine what functions to have avaialble
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
