
import { IEntity } from '../ISocialiis7Props';


export function ClashOfClans(){

    const entity :IEntity = {
      title: 'Clash Of Clans', //
      keywords: ["ttp","Gaming","IPad","Mobile"],
      profilePic: "https://pbs.twimg.com/profile_images/1006114388397391874/5mcVx5ku_400x400.jpg",
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
          title: '@ClashOfClans',
          order: 1, //For Sorting
          url: 'https://twitter.com/ClashofClans',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ,  // End twitter
      facebook:
      {
        title: 'ClashOfClans',
        order: 1, //For Sorting
        url: 'https://www.facebook.com/gaming/clashofclans/?sub_view=videos&fbsource=1103&external_ref=game_search_unit',
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
          title: 'Clash Of Clans Wikipedia',
          order: 1, //For Sorting
          url: 'https://en.wikipedia.org/wiki/Clash_of_Clans',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      youtube: {
        title: 'YouTube',
        user: 'OfficialClashOfClans', //Youtube User (from URL)
        order: 0, //For Sorting
        items: [
          {
            title: 'OfficialClashOfClans',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: 'OfficialClashOfClans', //Used to determine what functions to have avaialble
            objectUrl: 'https://www.youtube.com/user/OfficialClashOfClans', // to be used as generic link if no API key is given
          },{
            title: '',
            objectType: 'Video', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            objectUrl: '', // to be used as generic link if no API key is given
          },{
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
