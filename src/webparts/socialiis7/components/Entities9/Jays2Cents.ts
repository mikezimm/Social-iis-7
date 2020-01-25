
import { IEntity } from '../ISocialiis7Props';

export function Jays2Cents(){

  const entity :IEntity = {
    Title: 'Jays 2 Cents YouTuber', //
    keywords: ["PC","PCBuild","HomeRepairs"], // Can be any number of
    profilePic: "https://someURL.com",
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
      }
    ,  // End twitter
    facebook: 
    {
      NavTitle: '',
      order: 1, //For Sorting
      url: '',
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
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    youtube: {
      NavTitle: 'YouTube',
      user: 'Jayztwocents', //Youtube User (from URL)
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
          NavTitle: 'Wood Case mod',
          objectType: 'Video', //user,Channel, Playlist, Videos, Video
          objectID: 'lUyfdRpqDp0', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: 'Intel vs AMD - 2020',
          objectType: 'Video', //user,Channel, Playlist, Videos, Video
          objectID: 'p-B3_QXBgZk', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: 'Make old PC fast',
          objectType: 'Video', //user,Channel, Playlist, Videos, Video
          objectID: '9zGMi7HZ2AA', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: 'New AMD CPUs... should I upgrade?',
          objectType: 'Video', //user,Channel, Playlist, Videos, Video
          objectID: 'ElQbvMj08Ro', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: 'What to do?',
          objectType: 'Video', //user,Channel, Playlist, Videos, Video
          objectID: 'mVccnAr39Mo', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: '10 Realistic games of 2020?',
          objectType: 'Video', //user,Channel, Playlist, Videos, Video
          objectID: 'XiJGsTnJfhs', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: 'Replace GPU Thermal Paste?',
          objectType: 'Video', //user,Channel, Playlist, Videos, Video
          objectID: '6HbCY3-tun0', //Used to determine what functions to have avaialble
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
