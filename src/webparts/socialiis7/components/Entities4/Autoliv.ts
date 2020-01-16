
import { IEntity } from '../ISocialiis7Props';

export function Autoliv(){

  const entity :IEntity = {
    title: 'Autoliv', //
    keywords: ["Auto","Global","Tier1","Passive","AB","SB","SW","ALV"], // Can be any number of
    profilePic: "https://www.autoliv.com/sites/default/files/banner-contents/Crash-Test-Dummy-Closeup_3.jpg",
    blog: [
      {
        title: 'About Us',
        order: 1, //For Sorting
        url: 'https://www.autoliv.com/',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    twitter:
      {
        title: '@Autoliv on Twitter',
        order: 1, //For Sorting
        url: 'https://twitter.com/AutolivInc',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ,  // End twitter
    facebook:
    {
      title: 'FaceBook',
      order: 1, //For Sorting
      url: 'https://www.facebook.com/AutolivInc',
      codeType: 'TBD', //Used to determine what functions to have avaialble
      objectID: 'AutolivInc'
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
        title: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    youtube: {
      title: 'YouTube',
      user: '', //Youtube User (from URL)
      order: 0, //For Sorting
      items: [
        {
          title: '',
          objectType: 'Video', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        },{
          title: 'Autoliv YouTube Channel',
          objectType: 'Channel', //user,Channel, Playlist, Videos, Video
          objectID: 'UCpRLWz7tuZ42lUhKMGV_74Q', //Used to determine what functions to have avaialble
          objectUrl: 'https://www.youtube.com/channel/UCpRLWz7tuZ42lUhKMGV_74Q', // to be used as generic link if no API key is given
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