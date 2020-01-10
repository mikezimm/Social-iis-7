
import { IEntity } from '../ISocialiis7Props';

export function Ford(){

  const entity :IEntity = {
    title: 'Ford', //
    keywords: ["Auto","North America","Cars","Trucks","Electric","OEM","Ford"], // Can be any number of
    profilePic: "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2020/collections/3-2/20_frd_mst_ps34_gt350R_rcrd_32.jpg/_jcr_content/renditions/cq5dam.web.2160.2160.jpeg",
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
        title: 'Ford Home',
        order: 1, //For Sorting
        url: 'https://www.ford.com/',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      },      {
        title: 'Shelby',
        order: 1, //For Sorting
        url: 'https://www.ford.com/cars/mustang/models/shelby-gt350/?gnav=header-all-vehicles',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    youtube: {
      title: 'YouTube',
      user: '', //Youtube User (from URL)
      order: 0, //For Sorting
      channels: [
        {
          title: '',
          objectType: 'Channel', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        },{
          title: '',
          objectType: 'Channel', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        }
      ], // End YouTube channels
      playLists: [
        {
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
      ] // End YouTube playlists
    }, // End YouTube


  };

    //instagram:any,
    //facebook: any,
    //github: any,
    //androidStore: any,
    //appleStore: any,

    return entity;
    
}