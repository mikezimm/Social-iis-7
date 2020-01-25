
import { IEntity } from '../ISocialiis7Props';

export function FlightSimulator20(){

  const entity :IEntity = {
    Title: 'Flight Simulator', //
    keywords: ["PC","Gaming","Simulation","Flight"], // Can be any number of
    profilePic: "https://msgpwebsites.azureedge.net/fsi/wp-content/uploads/2019/06/KittyHawk_E3_withLogo_003-2.jpg",
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
        NavTitle: 'Flight Simulator.com',
        order: 1, //For Sorting
        url: 'https://www.flightsimulator.com/',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      },      {
        NavTitle: 'Insider FAQ',
        order: 1, //For Sorting
        url: 'https://www.flightsimulator.com/insider-program-faq/',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      },      {
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
          NavTitle: 'In depth review Oct 4, 10',
          objectType: 'Video', //user,Channel, Playlist, Videos, Video
          objectID: 'MOPIjzzH1G8', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },{
          NavTitle: 'Flight Sim Channel',
          objectType: 'Channel', //user,Channel, Playlist, Videos, Video
          objectID: 'UCdWFNDBen7LQc0eZUiJPW4Q', //Used to determine what functions to have avaialble
          url: '', // to be used as generic link if no API key is given
        },
        {
          NavTitle: 'New Flight Sim News',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: 'PLgmvnsNGp2X2S6aZ1sYomx7p7jK75eRCs', //Used to determine what functions to have avaialble
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