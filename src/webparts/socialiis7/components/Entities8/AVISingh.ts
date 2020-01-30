
import { IEntity } from '../ISocialiis7Props';

export function AviSingh(){

    const entity :IEntity = {
        Title: "Avi Singh",
        keywords: [
          "MSOffice",
          "PowerBI",
          "PowerUser",
          "MVP",
          "Avi Singh"
        ],
        keywordsText: "MSOffice;PowerBI;PowerUser;MVP",
        profilePic: "https://pbs.twimg.com/profile_images/732049231326806017/m4jUj2Lu_400x400.jpg",
        facebook: {
          NavTitle: "Facebook",
          url: "https://www.facebook.com/powerbipro",
          objectType: "",
          objectID: "powerbipro",
        },
        youtube: {
          NavTitle: "",
          user: "",
          items: [
            {
              NavTitle: "Avi's Youtube",
              url: "UCRNmSv7mAPYiC0Y40TJijAw",
              objectType: "channel",
              objectID: "UCRNmSv7mAPYiC0Y40TJijAw",
            }
          ]
        },
        webSites: [
          {
            NavTitle: "Website",
            url: "https://www.learnpowerbi.com/",
            objectType: "",
            objectID: "https://www.learnpowerbi.com/",
          }
        ],
        twitter: {
          NavTitle: "Twitter",
          url: "https://www.twitter.com/powerbipro",
          objectType: "",
          objectID: "powerbipro",
        }
      };
  
      //instagram:any,
      //facebook: any,
      //github: any,
      //androidStore: any,
      //appleStore: any,

      return entity;
      
  }