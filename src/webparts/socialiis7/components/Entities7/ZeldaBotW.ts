import { IEntity } from '../ISocialiis7Props';


export function ZeldaBotW(){

    const entity :IEntity = {
      Title: 'ZeldaBotW', //
      keywords: ["ttp","Nintendo","Switch","Gaming","RPG","Multiplayer"],
      profilePic: "https://www.zelda.com/breath-of-the-wild/assets/media/wallpapers/desktop-1.jpg",
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
      wikipedia:
      {
        NavTitle: 'Zelda Wikipedia',
        order: 1, //For Sorting
        url: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild',
        objectType: '', //Used to determine what functions to have avaialble
      },  // End wikipedia
      webSites: [
        {
          NavTitle: 'Zelda.com',
          order: 1, //For Sorting
          url: 'https://www.zelda.com/breath-of-the-wild/',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        },{
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
            NavTitle: 'Nintendo YouTube',
            objectType: 'User', //user,Channel, Playlist, Videos, Video
            objectID: 'Nintendo', //Used to determine what functions to have avaialble
            url: '', // to be used as generic link if no API key is given
        },{
            NavTitle: 'BotW PlayList',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PL2JiZAV5BmDULhRvaW7CgwicEUIgKqQ4N', //Used to determine what functions to have avaialble
            url: '', // to be used as generic link if no API key is given
          },{
            NavTitle: 'Stampy\`s BotW',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLEZiAg2bYC7nXdTKT4sBqU5RRZa7ShTsD', //Used to determine what functions to have avaialble
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
