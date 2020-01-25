
import { IEntity } from '../ISocialiis7Props';

export function GM(){

  const entity :IEntity = {
    Title: 'GM', //
    keywords: ["Auto","Global","Cars","Trucks","Electric","Gas","OEM"], // Can be any number of
    profilePic: "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/performance/camaro/gallery/exterior/01-images/2020-camaro-ext-gal-05.jpg",
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
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      } ,  //  End twitter
    facebook: 
    {
      NavTitle: 'GM Facebook',
      order: 1, //For Sorting
      url: '',
      objectID: 'generalmotors',
      objectType: 'TBD', //Used to determine what functions to have avaialble
    } ,  //  End facebook
    linkedIn: 
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      } ,  //  End linkedIn
    github: 
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      } ,  //  End github
    webSites: [
      {
        NavTitle: 'Corvette',
        order: 1, //For Sorting
        url: 'https://www.chevrolet.com/performance/corvette-zr1-supercar',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      },
      {
        NavTitle: 'Camaro',
        order: 1, //For Sorting
        url: 'https://www.chevrolet.com/performance/camaro',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      },
      {
        NavTitle: '2020 Corvette',
        order: 1, //For Sorting
        url: 'https://www.chevrolet.com/upcoming-vehicles/2020-corvette',
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