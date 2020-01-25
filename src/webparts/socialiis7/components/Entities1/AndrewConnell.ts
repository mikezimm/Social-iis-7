
import { IEntity } from '../ISocialiis7Props';

export function AndrewConnell(){

    const entity :IEntity = {
      Title: 'Andrew Connell', //
      keywords: ["MVP","SharePoint","SPFx"],
      profilePic: "https://www.andrewconnell.com/assets/images/Headshot_Color-1.png",
      blog: [
        {
          NavTitle: 'Andrew\'s Blog',
          order: 1, //For Sorting
          url: 'https://www.andrewconnell.com/blog/',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      twitter:
        {
          NavTitle: 'Andrew\'s Twitter Feed',
          order: 1, //For Sorting
          url: 'https://twitter.com/andrewconnell',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        }, 
    facebook:
        {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
        },  // End facebook
    linkedIn: 
        {
            NavTitle: 'Linked In',
            order: 1, //For Sorting
            url: 'https://www.linkedin.com/in/andrewconnell',
            objectType: 'TBD', //Used to determine what functions to have avaialble
        },  // End linkedIn
    github: 
        {
            NavTitle: 'Github',
            order: 1, //For Sorting
            url: 'https://github.com/AndrewConnell',
            objectType: 'TBD', //Used to determine what functions to have avaialble
        },  // End github
      stackExchange: 
      {
          NavTitle: 'Stack Exchange',
          order: 1, //For Sorting
          url: 'https://sharepoint.stackExchange.com/users/401/andrew-connell',
          objectType: 'TBD', //Used to determine what functions to have avaialble
      },  // End github
    webSites: [
        {
          NavTitle: 'Voitanos Training',
          order: 1, //For Sorting
          url: 'https://www.voitanos.io/',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        },        {
          NavTitle: 'Voitanos Training2',
          order: 1, //For Sorting
          url: 'https://www.voitanos.io/',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],  // End webSites
      youtube: {
        NavTitle: 'YouTube',
        user: 'jaconnell', //Youtube User (from URL)
        order: 0, //For Sorting,
        items: [
          {
            NavTitle: 'Laura Rogers Channel',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: 'UCbTVoDCaPM6wE0xsDGGr9VA', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/channel/UCbTVoDCaPM6wE0xsDGGr9VA', // to be used as generic link if no API key is given
          },{
            NavTitle: 'Office / SharePoint / SPFx',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLb9FvVDRfRYjJxT9CBTJy1ugWcGrebq0W', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/playlist?list=PLb9FvVDRfRYjJxT9CBTJy1ugWcGrebq0W', // to be used as generic link if no API key is given
          },{
            NavTitle: 'Space Shuttle',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLb9FvVDRfRYgLUxBwoDo_Qzt-G3_YgckS', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/playlist?list=PLb9FvVDRfRYgLUxBwoDo_Qzt-G3_YgckS', // to be used as generic link if no API key is given
          },{
            NavTitle: 'Test Video',
            objectType: 'Video', //user,Channel, Playlist, Videos, Video
            objectID: 'R4zeaxHxswM', //Used to determine what functions to have avaialble
            url: '', // to be used as generic link if no API key is given
          }
          
        ],
      },
  
  
    };
  
      //twitter: any,
      //blog: any,
      //instagram:any,
      //facebook: any,
      //github: any,
      //androidStore: any,
      //appleStore: any,

      return entity;
      
  }