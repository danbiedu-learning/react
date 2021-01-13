import React from 'react';
import {APICaller} from "./api/unsplash";

import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class App extends React.Component {
    state = { images: [] }

    async onSearchSubmit(item) {
        const response = await APICaller.get('/search/photos', {
            params: { query: item },
        })
        this.setState({ images: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: 20 }}>
                <SearchBar onMySubmit={this.onSearchSubmit.bind(this)}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;

