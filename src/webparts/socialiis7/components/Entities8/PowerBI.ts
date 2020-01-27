
import { IEntity } from '../ISocialiis7Props';

export function PowerBI(){

    const entity :IEntity = {
      Title: 'PowerBI', //
      keywords: ["MSOffice","PowerBI","Online"],
      profilePic: "",
      blog: [
        {
          NavTitle: 'Blog',
          order: 1, //For Sorting
          url: 'https://powerbi.microsoft.com/en-us/blog/',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      twitter: 
        {
          NavTitle: 'Twitter',
          order: 1, //For Sorting
          url: 'https://twitter.com/MSPowerBI',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        } ,  // End twitter
      facebook: 
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      } ,  // End facebook
      linkedIn: 
        {
          NavTitle: '',
          order: 1, //For Sorting
          url: '',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        } ,  // End linkedIn
      github: 
        {
          NavTitle: 'PowerBI on Github',
          order: 1, //For Sorting
          url: 'https://github.com/PowerBI',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        } ,  // End github
      webSites: [
        {
          NavTitle: 'PowerBI.com',
          order: 1, //For Sorting
          url: 'https://community.powerbi.com/',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        },{
          NavTitle: 'PowerBI User Group',
          order: 1, //For Sorting
          url: 'https://www.pbiusergroup.com/home',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      youtube: {
        NavTitle: 'YouTube',
        user: 'mspowerbi', //Youtube User (from URL)
        order: 0, //For Sorting
        items: [
          {
            NavTitle: 'Guy in a Cube Channel',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: 'UCFp1vaKzpfvoGai0vE5VJ0w', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/channel/UCFp1vaKzpfvoGai0vE5VJ0w', // to be used as generic link if no API key is given
          },{
            NavTitle: 'Curbal Youtube Channel',  //Submitted by Kittipong Neamchalone
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video   Twitter:  https://twitter.com/CurbalEN
            objectID: 'UCJ7UhloHSA4wAqPzyi6TOkw', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/channel/UCJ7UhloHSA4wAqPzyi6TOkw', // to be used as generic link if no API key is given
          },{
            NavTitle: '',
            objectType: 'Video', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            url: '', // to be used as generic link if no API key is given
          },{
            NavTitle: '',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            url: '', // to be used as generic link if no API key is given
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