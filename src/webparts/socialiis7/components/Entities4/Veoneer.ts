
import { IEntity } from '../ISocialiis7Props';

export function Veoneer(){

  const entity :IEntity = {
    Title: 'Veoneer', //
    keywords: ["Auto","Global","Tier1","Active","Radar","Night","Eye"], // Can be any number of
    profilePic: "https://pbs.twimg.com/media/ENwfZNqX0AAfZLr?format=jpg&name=240x240",
    blog: [
      {
        NavTitle: 'Someone\'s Blog',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    twitter: 
      {
        NavTitle: 'Veoneer on Twitter',
        order: 1, //For Sorting
        url: 'https://twitter.com/Veoneer',
        objectType: 'TBD', //Used to determine what functions to have avaialble
        objectID: 'Veoneer' 
      }
    ,  // End twitter
    facebook: 
    {
      NavTitle: 'Facebook',
      order: 1, //For Sorting
      url: 'https://www.facebook.com/Veoneer/',
      objectType: 'TBD', //Used to determine what functions to have avaialble
    }
    ,  // End facebook
    linkedIn: 
      {
        NavTitle: 'LinkedIn',
        order: 1, //For Sorting
        url: 'https://www.linkedin.com/company/veoneer/',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End linkedIn
    github: 
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End github
    webSites: [
      {
        NavTitle: 'Veoneer.com',
        order: 1, //For Sorting
        url: 'https://www.veoneer.com/en/who-we-are',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    youtube: {
      NavTitle: 'YouTube',
      user: '', //Youtube User (from URL)
      order: 0, //For Sorting
      items: [
        {
          NavTitle: 'Youtube Veoneer',
          objectType: 'Channel', //user,Channel, Playlist, Videos, Video
          objectID: 'UCRO1uMYtcNm1pzmQly1L4nw', //Used to determine what functions to have avaialble
          url: 'https://www.youtube.com/channel/UCRO1uMYtcNm1pzmQly1L4nw', // to be used as generic link if no API key is given
        },{
          NavTitle: 'MIT Human-Centered Autonomous Vehicle',
          objectType: 'Video', //user,Channel, Playlist, Videos, Video
          objectID: 'OoC8oH0CLGc', //Used to determine what functions to have avaialble
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