
import { IEntity } from '../ISocialiis7Props';


export function SiteDesigns(){

    const entity :IEntity = {
      title: 'SiteDesigns', //
      keywords: ["SiteDesigns","SharePoint","ttp"],
      profilePic: "http://ericoverfield.com/wp-content/uploads/2018/06/modern-classic-theming-1.jpg",
      blog: [
        {
          title: 'Laura Kokkarinen',
          order: 1, //For Sorting
          url: 'https://laurakokkarinen.com/the-ultimate-guide-to-sharepoint-site-designs-and-site-scripts/',
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
          title: 'GitHub Site Scripts',
          order: 1, //For Sorting
          url: 'https://github.com/SharePoint/sp-dev-site-scripts',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ,  // End github
      webSites: [
        {
          title: 'MS Documentation',
          order: 1, //For Sorting
          url: 'https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-overview',
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
            title: 'Extensions Tutorial',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLR9nK3mnD-OXtWO5AIIr7nCR3sWutACpV', //Used to determine what functions to have avaialble
            objectUrl: 'https://www.youtube.com/watch?v=5wITuXdBLqM&list=PLR9nK3mnD-OXtWO5AIIr7nCR3sWutACpV', // to be used as generic link if no API key is given
          },{
            title: 'Page Transformation',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLR9nK3mnD-OXBJr5tcAqxqSn2vwvRYgeZ', //Used to determine what functions to have avaialble
            objectUrl: 'https://www.youtube.com/watch?v=F5POxZPIy84&list=PLR9nK3mnD-OXBJr5tcAqxqSn2vwvRYgeZ', // to be used as generic link if no API key is given
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
