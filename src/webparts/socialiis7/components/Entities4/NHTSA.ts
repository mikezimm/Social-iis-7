
import { IEntity } from '../ISocialiis7Props';

export function NHSTA(){

  const entity :IEntity = {
    Title: 'NHSTA', //
    keywords: ["Auto","Regulatory","NA","North America"], // Can be any number of
    profilePic: "https://www.nhtsa.gov/sites/nhtsa.dot.gov/files/winter-driving-tips-2019-homepage-hero.jpg",
    blog: [
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    twitter: 
      {
        NavTitle: 'Twitter',
        order: 1, //For Sorting
        url: 'https://twitter.com/NHTSAgov',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End twitter
    facebook: 
    {
      NavTitle: 'Facebook',
      order: 1, //For Sorting
      url: 'https://www.facebook.com/NHTSA/',
      objectType: 'TBD', //Used to determine what functions to have avaialble
    }
    ,  // End facebook
    linkedIn: 
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
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
        NavTitle: 'NHTSA.gov',
        order: 1, //For Sorting
        url: 'https://www.nhtsa.gov',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      },{
        NavTitle: 'NHTSA Ratings',
        order: 1, //For Sorting
        url: 'https://www.nhtsa.gov/ratings',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      },{
        NavTitle: 'NHTSA Recalls',
        order: 1, //For Sorting
        url: 'https://www.nhtsa.gov/recalls',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      },{
        NavTitle: 'safecar.gov 5 star ratings',
        order: 1, //For Sorting
        url: 'https://www.safercar.gov/Safety+Ratings',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      },{
        NavTitle: 'Takata Recall info',
        order: 1, //For Sorting
        url: 'https://datahub.transportation.gov/Automobiles/Takata-Recall-Air-Bags-Repaired-Remaining-by-Manuf/kdn4-w5z3',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }

      
    ],
    youtube: {
      NavTitle: 'YouTube',
      user: 'usdotnhtsa', //Youtube User (from URL)
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
          NavTitle: 'Distracted Driving',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: 'PL2GlXO1j4M734mT_Q4nxsle5UhfR-nxUG', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: 'Victim\'s Stories',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: 'PL2GlXO1j4M710fnrcOSAQUn3WeNlZkBI2', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: 'Newer Cars are Safer',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: 'PL2GlXO1j4M71HXh-KNeh6F1a5nBdZZn5p', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        }

        

      ] // End YouTube playlists
    }, // End YouTube
    instagram: 
      {
        NavTitle: 'Instagram',
        order: 1, //For Sorting
        url: 'https://www.instagram.com/nhtsagov/',
        objectType: 'TBD', //Used to determine what functions to have avaialble
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