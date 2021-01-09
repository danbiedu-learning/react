import React from 'react';
import {APICaller} from "./api/unsplash";

import SearchBar from "./components/SearchBar";

class App extends React.Component {

    async onSearchSubmit(item) {
        const response = await APICaller.get('/search/photos', {
            params: { query: item },
        })
        console.log(response.data.results);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: 20 }}>
                <SearchBar onMySubmit={this.onSearchSubmit.bind(this)}/>
            </div>
        )
    }
}

export default App;

