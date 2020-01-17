
import { IEntity } from '../ISocialiis7Props';

export function PowerBI(){

    const entity :IEntity = {
      title: 'PowerBI', //
      keywords: ["MSOffice","PowerBI","Online"],
      profilePic: "",
      blog: [
        {
          title: 'Blog',
          order: 1, //For Sorting
          url: 'https://powerbi.microsoft.com/en-us/blog/',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      twitter: 
        {
          title: 'Twitter',
          order: 1, //For Sorting
          url: 'https://twitter.com/MSPowerBI',
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
          title: 'PowerBI on Github',
          order: 1, //For Sorting
          url: 'https://github.com/PowerBI',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ,  // End github
      webSites: [
        {
          title: 'PowerBI.com',
          order: 1, //For Sorting
          url: 'https://community.powerbi.com/',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      youtube: {
        title: 'YouTube',
        user: 'mspowerbi', //Youtube User (from URL)
        order: 0, //For Sorting
        items: [
          {
            title: 'Guy in a Cube Channel',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: 'UCFp1vaKzpfvoGai0vE5VJ0w', //Used to determine what functions to have avaialble
            objectUrl: 'https://www.youtube.com/channel/UCFp1vaKzpfvoGai0vE5VJ0w', // to be used as generic link if no API key is given
          },{
            title: 'Curbal Youtube Channel',  //Submitted by Kittipong Neamchalone
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video   Twitter:  https://twitter.com/CurbalEN
            objectID: 'UCJ7UhloHSA4wAqPzyi6TOkw', //Used to determine what functions to have avaialble
            objectUrl: 'https://www.youtube.com/channel/UCJ7UhloHSA4wAqPzyi6TOkw', // to be used as generic link if no API key is given
          },{
            title: '',
            objectType: 'Video', //user,Channel, Playlist, Videos, Video
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