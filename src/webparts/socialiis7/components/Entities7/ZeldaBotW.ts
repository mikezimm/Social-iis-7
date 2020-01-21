import { IEntity } from '../ISocialiis7Props';


export function ZeldaBotW(){

    const entity :IEntity = {
      title: 'ZeldaBotW', //
      keywords: ["ttp","Nintendo","Switch","Gaming","RPG","Multiplayer"],
      profilePic: "https://www.zelda.com/breath-of-the-wild/assets/media/wallpapers/desktop-1.jpg",
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
          title: 'Zelda.com',
          order: 1, //For Sorting
          url: 'https://www.zelda.com/breath-of-the-wild/',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        },{
            title: 'Wikipedia',
            order: 1, //For Sorting
            url: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild',
            codeType: 'TBD', //Used to determine what functions to have avaialble
          }        
      ],
      youtube: {
        title: 'YouTube',
        user: '', //Youtube User (from URL)
        order: 0, //For Sorting
        items: [
          {
            title: 'Nintendo YouTube',
            objectType: 'User', //user,Channel, Playlist, Videos, Video
            objectID: 'Nintendo', //Used to determine what functions to have avaialble
            objectUrl: '', // to be used as generic link if no API key is given
        },{
            title: 'BotW PlayList',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PL2JiZAV5BmDULhRvaW7CgwicEUIgKqQ4N', //Used to determine what functions to have avaialble
            objectUrl: '', // to be used as generic link if no API key is given
          },{
            title: 'Stampy\`s BotW',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLEZiAg2bYC7nXdTKT4sBqU5RRZa7ShTsD', //Used to determine what functions to have avaialble
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
