
import { IEntity } from '../ISocialiis7Props';


export function ListFormatting(){

    const entity :IEntity = {
      Title: 'ListFormatting', //
      keywords: ["ColumnFormatting","SharePoint","ttp","ListFormatting"],
      profilePic: "http://niftit.com/wp-content/uploads/2018/08/NIFTITPost-ColumnFormatting.png",
      blog: [
        {
          NavTitle: 'List Formatting Samples',
          order: 1, //For Sorting
          url: 'https://sharepoint.github.io/sp-dev-list-formatting/',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      twitter:
        {
          NavTitle: '@theChrisKent',
          order: 1, //For Sorting
          url: 'https://twitter.com/theChrisKent',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        } ,  // End twitter
      facebook:
      {
        NavTitle: 'SP PnP Facebook',
        order: 1, //For Sorting
        url: 'https://www.facebook.com/OfficeDevPnP/',
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
          NavTitle: 'GitHub Samples',
          order: 1, //For Sorting
          url: 'https://github.com/SharePoint/sp-dev-list-formatting/tree/master/view-samples',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        } ,  // End github
      webSites: [
        {
          NavTitle: 'MS Documentation',
          order: 1, //For Sorting
          url: 'https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/column-formatting',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      youtube: {
        NavTitle: 'YouTube',
        user: '', //Youtube User (from URL)
        order: 0, //For Sorting
        items: [
          {
            NavTitle: 'SP Dev Channel',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: 'UC_mKdhw-V6CeCM7gTo_Iy7w', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/channel/UC_mKdhw-V6CeCM7gTo_Iy7w', // to be used as generic link if no API key is given
          },
          {
            NavTitle: 'Formatting Tips',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLR9nK3mnD-OXgMjDBdjWUTRia89oixBhx', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/watch?v=0ZMWqgygzII&list=PLR9nK3mnD-OXgMjDBdjWUTRia89oixBhx', // to be used as generic link if no API key is given
          },{
            NavTitle: 'SharePoint JSON',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PL5X9wgrSC2w3Yk04Hng4NRIeMyzqv068H', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/watch?v=6vT4oGr2ZKU&list=PL5X9wgrSC2w3Yk04Hng4NRIeMyzqv068H', // to be used as generic link if no API key is given
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
