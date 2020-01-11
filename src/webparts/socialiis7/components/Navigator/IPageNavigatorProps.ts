import { INavLink } from 'office-ui-fabric-react/lib/Nav';

export interface IPageNavigatorProps {
  description: string;

  anchorLinks: INavLink[];
  selectedNavKey: string;
  selectedEntityString: string;
  onNavClick?: (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => void;
  
}
