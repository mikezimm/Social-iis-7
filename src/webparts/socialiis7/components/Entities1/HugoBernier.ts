
import { IEntity } from '../ISocialiis7Props';

  export function HugoBernier(){

    const entity :IEntity = {
      title: 'Hugo Bernier', //
      keywords: ["MVP","SharePoint","SPFx"],
      profilePic: "https://tahoeninjas.blog/wp-content/uploads/2019/08/Hugo-Headshot-260-Square.jpg",
      blog: [
        {
          title: 'About Me',
          order: 1, //For Sorting
          url: 'https://tahoeninjas.blog/about/',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        },
        {
          title: 'Tahoe Nijas',
          order: 1, //For Sorting
          url: 'https://tahoeninjas.blog/author/bernierh/',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      twitter: 
        {
          title: 'Twitter',
          order: 1, //For Sorting
          url: 'https://twitter.com/bernierh',
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
          title: 'Linked In',
          order: 1, //For Sorting
          url: 'https://linkedin.com/in/bernierh',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ,  // End linkedIn
      github: 
        {
          title: 'Github',
          order: 1, //For Sorting
          url: 'https://github.com/hugoabernier',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ,  // End github
      webSites: [
        {
          title: '',
          order: 1, //For Sorting
          url: '',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      youtube: {
        title: 'YouTube',
        user: '', //Youtube User (from URL)
        order: 0, //For Sorting
        items: [
          {
            title: '',
            objectType: 'Video', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            objectUrl: '', // to be used as generic link if no API key is given
          },{
            title: '',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
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