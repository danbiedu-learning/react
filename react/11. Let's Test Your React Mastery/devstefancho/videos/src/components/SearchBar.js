import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};
    onInputChange = (ev) => {
        this.setState({term: ev.target.value});
    }
    onFormSubmit = (ev) => {
        ev.preventDefault();
        console.log(this.state.term)
    }
    render() {
        return(
            <div className="ui segment">
                <form
                    className="search-bar ui form"
                    onSubmit={this.onFormSubmit}
                >
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            onChange={this.onInputChange}
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;