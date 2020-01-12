import * as React from 'react';
import styles from './PageNavigator.module.scss';
import { IPageNavigatorProps } from './IPageNavigatorProps';
import { IPageNavigatorState } from './IPageNavigatorState';
import { Nav, INavLink } from 'office-ui-fabric-react/lib/Nav';

export default class PageNavigator extends React.Component<IPageNavigatorProps, IPageNavigatorState> {
  constructor(props: IPageNavigatorProps) {
    super(props);

    this.state = {
      anchorLinks: [],
      selectedKey: this.props.selectedNavKey,
      selectedEntityString: this.props.selectedEntityString,
    };

    this.onLinkClick = this.onLinkClick.bind(this);
  }

  /*
    */
  public componentDidMount() {

    this.setState({ 
      anchorLinks: this.props.anchorLinks, 
      selectedKey: this.props.anchorLinks[0] ? this.props.anchorLinks[0].key : '',
      selectedEntityString: this.props.selectedEntityString });
  }

  public componentDidUpdate(prevProps: IPageNavigatorProps) {

    let didUpdate = false;
    if (JSON.stringify(prevProps.anchorLinks) !== JSON.stringify(this.props.anchorLinks)) { didUpdate = true; }
    if (prevProps.selectedEntityString !== this.props.selectedEntityString) { didUpdate = true; }

    if ( didUpdate ) {
      this.setState({ 
        anchorLinks: this.props.anchorLinks, 
        selectedKey: this.props.anchorLinks[0] ? this.props.anchorLinks[0].key : '',
        selectedEntityString: this.props.selectedEntityString });
    }
  }


  private onLinkClick(ev: React.MouseEvent<HTMLElement>, item?: INavLink) {
    ev.preventDefault(); // Let's stop this event.
    this.setState({ selectedKey: item.key });
  }

  public render(): React.ReactElement<IPageNavigatorProps> {

    //console.log('Build page navigation: ', this.props, this.state);
    return (
      <div className={styles.pageNavigator}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.title}>{this.props.description}</div>
              <Nav selectedKey={this.props.selectedNavKey}
                onLinkClick={(this.props.onNavClick)}
                groups={[
                  {
                    links: this.state.anchorLinks
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
