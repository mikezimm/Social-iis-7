import * as React from 'react';
import { ISearchBarProps } from './ISearchBarProps';
import { ISearchBarState } from './ISearchBarState';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

export class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    //Was not marked public but came up in TS Lint error
    //The class method 'render' must be marked either 'private', 'public', or 'protected'
    public render(): React.ReactElement<ISearchBarProps> {
        {
            return (
                <div className="search-bar">
                    <TextField
                        label='Search a video -- CURRENTLY DISABLED DUE TO HIGH API Quota Cost'
                        iconProps={{ iconName: 'Search' }}
                        value={this.state.term}
                        onChanged={this.onInputChange}
                    />
                </div>
            );
        }
    }

    @autobind
    private onInputChange(term: string) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;