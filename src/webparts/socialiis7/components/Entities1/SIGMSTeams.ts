
import { IEntity } from '../ISocialiis7Props';


export function SIGMSTeams(){

  const entity :IEntity = {
    Title: 'SIG MSTeams', //
    keywords: ["SIG","MSOffice","Online","MSTeams"], // Can be any number of
    profilePic: "",
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
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      } ,  //  End twitter
    facebook: 
    {
      NavTitle: '',
      order: 1, //For Sorting
      url: '',
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
            NavTitle: 'Teams Community Calls',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLWZJrkeLOrbbTKzV1sQOFAXd_s0BHJDiL', //Used to determine what functions to have avaialble
            url: '', // to be used as generic link if no API key is given
        },{
            NavTitle: 'Learn how to build Teams Apps',
            objectType: 'Video', //user,Channel, Playlist, Videos, Video
            objectID: 'ZH0sqPeNVbk', //Used to determine what functions to have avaialble
            url: '', // to be used as generic link if no API key is given
        },{
            NavTitle: 'MSTeams Developer Training',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLWZJrkeLOrbYIpskTq7ggZIQF9iWhvWpG', //Used to determine what functions to have avaialble
            url: '', // to be used as generic link if no API key is given
        },{
            NavTitle: 'MSFT365 Developer',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: 'UCV_6HOhwxYLXAGd-JOqKPoQ', //Used to determine what functions to have avaialble
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