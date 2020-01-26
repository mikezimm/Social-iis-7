
import { IEntity } from '../ISocialiis7Props';

  export function HugoBernier(){

    const entity :IEntity = {
      Title: 'Hugo Bernier', //
      keywords: ["MVP","SharePoint","SPFx"],
      profilePic: "https://tahoeninjas.blog/wp-content/uploads/2019/08/Hugo-Headshot-260-Square.jpg",
      blog: [
        {
          NavTitle: 'About Me',
          order: 1, //For Sorting
          url: 'https://tahoeninjas.blog/about/',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        },
        {
          NavTitle: 'Tahoe Nijas',
          order: 1, //For Sorting
          url: 'https://tahoeninjas.blog/author/bernierh/',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      twitter: 
        {
          NavTitle: 'Twitter',
          order: 1, //For Sorting
          url: 'https://twitter.com/bernierh',
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
          NavTitle: 'Linked In',
          order: 1, //For Sorting
          url: 'https://linkedin.com/in/bernierh',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        } ,  // End linkedIn
      github: 
        {
          NavTitle: 'Github',
          order: 1, //For Sorting
          url: 'https://github.com/hugoabernier',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        } ,  // End github
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
            NavTitle: '',
            objectType: 'Video', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            url: '', // to be used as generic link if no API key is given
          },{
            NavTitle: '',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
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