
import { IEntity } from '../ISocialiis7Props';

export function BlackCats(){

  const entity :IEntity = {

      Title: 'Black Cats', //
      keywords: ["ttp","Animals","Pets","Dark"],
      profilePic: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Blackcat-Lilith.jpg",
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
          NavTitle: 'Twitter',
          order: 1, //For Sorting
          url: 'https://twitter.com/blackcatrescue',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        } ,  // End twitter
      facebook:
      {
        NavTitle: 'Facebook',
        order: 1, //For Sorting
        url: 'https://www.facebook.com/Black-Cats-759441280811241/',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      } ,  // End facebook
      linkedIn:
        {
          NavTitle: '',
          order: 1, //For Sorting
          url: '',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        },  // End linkedIn
      github:
        {
          NavTitle: '',
          order: 1, //For Sorting
          url: '',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        },  // End github
      wikipedia:
      {
        NavTitle: 'Wikipedia',
        order: 1, //For Sorting
        url: 'https://en.wikipedia.org/wiki/Black_cat',
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
            NavTitle: 'Black Cats Rescue',
            objectType: 'Video', //user,Channel, Playlist, Videos, Video
            objectID: '7pgY2YetXyE', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/watch?v=7pgY2YetXyE', // to be used as generic link if no API key is given
          },{
            NavTitle: 'Funny Cat Videos',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLtDp75hOzOlbD7m-Gb2t4dZqyYx7dq0iB', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/playlist?list=PLtDp75hOzOlbD7m-Gb2t4dZqyYx7dq0iB', // to be used as generic link if no API key is given
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
