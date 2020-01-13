
import { IEntity } from '../ISocialiis7Props';

export function NHSTA(){

  const entity :IEntity = {
    title: 'NHSTA', //
    keywords: ["Auto","Regulatory","NA","North America"], // Can be any number of
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
        url: 'https://twitter.com/NHTSAgov',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End twitter
    facebook: 
    {
      title: 'Facebook',
      order: 1, //For Sorting
      url: 'https://www.facebook.com/NHTSA/',
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
        title: 'NHTSA.gov',
        order: 1, //For Sorting
        url: 'https://www.nhtsa.gov',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      },{
        title: 'NHTSA Ratings',
        order: 1, //For Sorting
        url: 'https://www.nhtsa.gov/ratings',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      },{
        title: 'NHTSA Recalls',
        order: 1, //For Sorting
        url: 'https://www.nhtsa.gov/recalls',
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
      user: 'usdotnhtsa', //Youtube User (from URL)
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
          title: 'Distracted Driving',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: 'PL2GlXO1j4M734mT_Q4nxsle5UhfR-nxUG', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        },{
          title: 'Victim\'s Stories',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: 'PL2GlXO1j4M710fnrcOSAQUn3WeNlZkBI2', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        },{
          title: 'Newer Cars are Safer',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: 'PL2GlXO1j4M71HXh-KNeh6F1a5nBdZZn5p', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        }

        

      ] // End YouTube playlists
    }, // End YouTube
    instagram: 
      {
        title: 'Instagram',
        order: 1, //For Sorting
        url: 'https://www.instagram.com/nhtsagov/',
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