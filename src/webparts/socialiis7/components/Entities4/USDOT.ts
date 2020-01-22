
import { IEntity } from '../ISocialiis7Props';

export function USDOT(){

  const entity :IEntity = {
    title: 'USDOT', //
    keywords: ["Auto","Regulatory","NA","North America"], // Can be any number of
    profilePic: "https://www.transportation.gov/sites/dot.gov/files/styles/homepage_slider_980_400/public/slides/AV%204.jpg?itok=fIe2Kf_J",
    blog: [
      {
        title: 'USDOT Blog',
        order: 1, //For Sorting
        url: 'https://www.transportation.gov/blog/connections',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    twitter: 
      {
        title: 'USDOT Twitter',
        order: 1, //For Sorting
        url: 'https://twitter.com/USDOT',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End twitter
    facebook: 
    {
      title: 'USDOT Facebook',
      order: 1, //For Sorting
      url: 'https://www.facebook.com/USDOT/',
      codeType: 'TBD', //Used to determine what functions to have avaialble
    }
    ,  // End facebook
    linkedIn: 
      {
        title: 'USDOT Linked In',
        order: 1, //For Sorting
        url: 'https://www.linkedin.com/company/us-department-of-transportation-dot',
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
        title: 'Transportation.gov',
        order: 1, //For Sorting
        url: 'https://www.transportation.gov/',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      },{
        title: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      },{
        title: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      },{
        title: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    youtube: {
      title: 'YouTube',
      user: 'usdotgov', //Youtube User (from URL)
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
        },{
          title: '',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        }



      ] // End YouTube playlists
    }, // End YouTube
    instagram: 
      {
        title: 'Instagram',
        order: 1, //For Sorting
        url: 'https://www.instagram.com/usdot/',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End linkedIn

  };



    //instagram:any,
    //facebook: any,
    //github: any,
    //androidStore: any,
    //appleStore: any,

    return entity;

} 