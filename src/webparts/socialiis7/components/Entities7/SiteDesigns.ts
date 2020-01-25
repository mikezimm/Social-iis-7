
import { IEntity } from '../ISocialiis7Props';


export function SiteDesigns(){

    const entity :IEntity = {
      Title: 'SiteDesigns', //
      keywords: ["SiteDesigns","SharePoint","ttp"],
      profilePic: "http://ericoverfield.com/wp-content/uploads/2018/06/modern-classic-theming-1.jpg",
      blog: [
        {
          NavTitle: 'Laura Kokkarinen',
          order: 1, //For Sorting
          url: 'https://laurakokkarinen.com/the-ultimate-guide-to-sharepoint-site-designs-and-site-scripts/',
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
          NavTitle: 'GitHub Site Scripts',
          order: 1, //For Sorting
          url: 'https://github.com/SharePoint/sp-dev-site-scripts',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        } ,  // End github
      webSites: [
        {
          NavTitle: 'MS Documentation',
          order: 1, //For Sorting
          url: 'https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-overview',
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
            NavTitle: 'Extensions Tutorial',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLR9nK3mnD-OXtWO5AIIr7nCR3sWutACpV', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/watch?v=5wITuXdBLqM&list=PLR9nK3mnD-OXtWO5AIIr7nCR3sWutACpV', // to be used as generic link if no API key is given
          },{
            NavTitle: 'Page Transformation',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLR9nK3mnD-OXBJr5tcAqxqSn2vwvRYgeZ', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/watch?v=F5POxZPIy84&list=PLR9nK3mnD-OXBJr5tcAqxqSn2vwvRYgeZ', // to be used as generic link if no API key is given
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
