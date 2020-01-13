
import { IEntity } from '../ISocialiis7Props';


export function ListFormatting(){

    const entity :IEntity = {
      title: 'ListFormatting', //
      keywords: ["ColumnFormatting","SharePoint","ttp","ListFormatting"],
      profilePic: "http://niftit.com/wp-content/uploads/2018/08/NIFTITPost-ColumnFormatting.png",
      blog: [
        {
          title: 'List Formatting Samples',
          order: 1, //For Sorting
          url: 'https://sharepoint.github.io/sp-dev-list-formatting/',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      twitter:
        {
          title: '@theChrisKent',
          order: 1, //For Sorting
          url: 'https://twitter.com/theChrisKent',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ,  // End twitter
      facebook:
      {
        title: 'SP PnP Facebook',
        order: 1, //For Sorting
        url: 'https://www.facebook.com/OfficeDevPnP/',
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
          title: 'GitHub Samples',
          order: 1, //For Sorting
          url: 'https://github.com/SharePoint/sp-dev-list-formatting/tree/master/view-samples',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ,  // End github
      webSites: [
        {
          title: 'MS Documentation',
          order: 1, //For Sorting
          url: 'https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/column-formatting',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      youtube: {
        title: 'YouTube',
        user: '', //Youtube User (from URL)
        order: 0, //For Sorting
        items: [
          {
            title: 'SP Dev Channel',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: 'UC_mKdhw-V6CeCM7gTo_Iy7w', //Used to determine what functions to have avaialble
            objectUrl: 'https://www.youtube.com/channel/UC_mKdhw-V6CeCM7gTo_Iy7w', // to be used as generic link if no API key is given
          },
          {
            title: 'Formatting Tips',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLR9nK3mnD-OXgMjDBdjWUTRia89oixBhx', //Used to determine what functions to have avaialble
            objectUrl: 'https://www.youtube.com/watch?v=0ZMWqgygzII&list=PLR9nK3mnD-OXgMjDBdjWUTRia89oixBhx', // to be used as generic link if no API key is given
          },{
            title: 'SharePoint JSON',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PL5X9wgrSC2w3Yk04Hng4NRIeMyzqv068H', //Used to determine what functions to have avaialble
            objectUrl: 'https://www.youtube.com/watch?v=6vT4oGr2ZKU&list=PL5X9wgrSC2w3Yk04Hng4NRIeMyzqv068H', // to be used as generic link if no API key is given
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
