import { ISocialiis7Props, ITopics, IEntity, NonArrayNodes } from '../ISocialiis7Props';
import {IUser, ISocialiis7State, IMyPivots, IPivot, ILoadData, IListEntities} from '../ISocialiis7State';

export interface ICommandBarProps {
      /**
     * Callback for when the selected pivot item is changed.
     */
    toggleTips?: (item?: any, ev?: React.MouseEvent<HTMLElement>) => void;
    minimize?: (item?: any, ev?: React.MouseEvent<HTMLElement>) => void;
    searchMe?: (item?: any, ev?: React.MouseEvent<HTMLElement>) => void;
    showAll?: (item?: any, ev?: React.MouseEvent<HTMLElement>) => void;
    toggleLayout?: (item?: any, ev?: React.MouseEvent<HTMLElement>) => void;
    commandClass?: string;
    setLayout?: string;
    topics?: ITopics;

  }

  /*

    imageUrl: string;
    title: string;
    description: string;
    href: string;
    category:string[];
    setTab: string;
    listWebURL: string;
    listTitle: string;
    Id: string;
    
    options: string;
    color: string;
    imgSize: string;
    heroType: string;
  
    setRatio: string;
    setSize: string;
    setImgFit: string;
    setImgCover: string;
    target: string;
    
    parentCat?:string;

  */