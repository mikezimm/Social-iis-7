
import { IEntity } from '../ISocialiis7Props';


export function ClashOfClans(){

    const entity :IEntity = {
      Title: 'Clash Of Clans', //
      keywords: ["ttp","Gaming","IPad","Mobile"],
      profilePic: "https://pbs.twimg.com/profile_images/1006114388397391874/5mcVx5ku_400x400.jpg",
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
          NavTitle: '@ClashOfClans',
          order: 1, //For Sorting
          url: 'https://twitter.com/ClashofClans',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        } ,  // End twitter
      facebook:
      {
        NavTitle: 'ClashOfClans Facebook',
        order: 1, //For Sorting
        url: 'https://www.facebook.com/gaming/clashofclans/',
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
        NavTitle: 'Clash Of Clans Wikipedia',
        order: 1, //For Sorting
        url: 'https://en.wikipedia.org/wiki/Clash_of_Clans',
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
        NavTitle: 'YouTube Official Channel',
        user: 'OfficialClashOfClans', //Youtube User (from URL)
        order: 0, //For Sorting
        items: [
          {
            NavTitle: '',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            url: '', // to be used as generic link if no API key is given
          },{
            NavTitle: '',
            objectType: 'Video', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            url: '', // to be used as generic link if no API key is given
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
