
import { IEntity } from '../ISocialiis7Props';

export function IIHS(){

  const entity :IEntity = {
    title: 'IIHS', //
    keywords: ["Auto","Industry","NA","North America"], // Can be any number of
    profilePic: "https://someURL.com",
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
        title: 'Twitter',
        order: 1, //For Sorting
        url: 'https://twitter.com/iihs_autosafety',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End twitter
    facebook: 
    {
      title: 'Facebook',
      order: 1, //For Sorting
      url: 'https://www.facebook.com/iihs.org/',
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
    instagram: 
      {
        title: 'Instagram',
        order: 1, //For Sorting
        url: 'https://www.instagram.com/iihs_autosafety/',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
      ,  // End github
      wikipedia: 
        {
          title: 'Wikipedia',
          order: 1, //For Sorting
          url: 'https://en.wikipedia.org/wiki/Insurance_Institute_for_Highway_Safety',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
    ,  // End instagram
    webSites: [
      {
        title: 'IIHS-HLDI',
        order: 1, //For Sorting
        url: 'https://www.iihs.org',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      },{
        title: 'IIHS-HLDI Ratings',
        order: 1, //For Sorting
        url: 'https://www.iihs.org/ratings',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      },{
        title: 'IIHS-HLDI News',
        order: 1, //For Sorting
        url: 'https://www.iihs.org/news',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    youtube: {
      title: 'YouTube',
      user: 'iihs', //Youtube User (from URL)
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
      ] // End YouTube playlists
    }, // End YouTube


  };

    //facebook: any,
    //github: any,
    //androidStore: any,
    //appleStore: any,

    return entity;
    
}