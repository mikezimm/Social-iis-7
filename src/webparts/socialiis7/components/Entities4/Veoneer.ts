
import { IEntity } from '../ISocialiis7Props';

export function Veoneer(){

  const entity :IEntity = {
    title: 'Veoneer', //
    keywords: ["Auto","Global","Tier1","Active","Radar","Night","Eye"], // Can be any number of
    profilePic: "https://pbs.twimg.com/media/ENwfZNqX0AAfZLr?format=jpg&name=240x240",
    blog: [
      {
        title: 'Someone\'s Blog',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    twitter: 
      {
        title: 'Veoneer on Twitter',
        order: 1, //For Sorting
        url: 'https://twitter.com/Veoneer',
        codeType: 'TBD', //Used to determine what functions to have avaialble
        objectID: 'Veoneer' 
      }
    ,  // End twitter
    facebook: 
    {
      title: 'Facebook',
      order: 1, //For Sorting
      url: 'https://www.facebook.com/Veoneer/',
      codeType: 'TBD', //Used to determine what functions to have avaialble
    }
    ,  // End facebook
    linkedIn: 
      {
        title: 'LinkedIn',
        order: 1, //For Sorting
        url: 'https://www.linkedin.com/company/veoneer/',
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
        title: 'Veoneer.com',
        order: 1, //For Sorting
        url: 'https://www.veoneer.com/en/who-we-are',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    youtube: {
      title: 'YouTube',
      user: '', //Youtube User (from URL)
      order: 0, //For Sorting
      items: [
        {
          title: 'Youtube Veoneer',
          objectType: 'Channel', //user,Channel, Playlist, Videos, Video
          objectID: 'UCRO1uMYtcNm1pzmQly1L4nw', //Used to determine what functions to have avaialble
          objectUrl: 'https://www.youtube.com/channel/UCRO1uMYtcNm1pzmQly1L4nw', // to be used as generic link if no API key is given
        },{
          title: 'MIT Human-Centered Autonomous Vehicle',
          objectType: 'Video', //user,Channel, Playlist, Videos, Video
          objectID: 'OoC8oH0CLGc', //Used to determine what functions to have avaialble
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