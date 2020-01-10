
import { IEntity } from '../ISocialiis7Props';

export function Autoliv(){

  const entity :IEntity = {
    title: 'Autoliv', //
    keywords: ["Auto","Global","Tier1","Passive","AB","SB","SW"], // Can be any number of
    profilePic: "https://upload.wikimedia.org/wikipedia/en/5/56/Autoliv_logo.svg?download",
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
      url: 'https://www.facebook.com/pages/Autoliv/104462136316253',
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
        title: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    youtube: {
      title: 'YouTube',
      user: 'UCpRLWz7tuZ42lUhKMGV_74Q', //Youtube User (from URL)
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