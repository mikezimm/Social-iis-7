
import { IEntity } from '../ISocialiis7Props';

export function GM(){

  const entity :IEntity = {
    title: 'GM', //
    keywords: ["Auto","Global","Cars","Trucks","Electric","Gas","OEM"], // Can be any number of
    profilePic: "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/performance/camaro/gallery/exterior/01-images/2020-camaro-ext-gal-05.jpg",
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
        title: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End twitter
    facebook: 
    {
      title: 'Facebook',
      order: 1, //For Sorting
      url: '',
      objectID: 'generalmotors',
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
        title: 'Corvette',
        order: 1, //For Sorting
        url: 'https://www.chevrolet.com/performance/corvette-zr1-supercar',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      },
      {
        title: 'Camaro',
        order: 1, //For Sorting
        url: 'https://www.chevrolet.com/performance/camaro',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      },
      {
        title: '2020 Corvette',
        order: 1, //For Sorting
        url: 'https://www.chevrolet.com/upcoming-vehicles/2020-corvette',
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