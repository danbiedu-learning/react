import React from 'react';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import env from 'react-dotenv'

class App extends React.Component {
    onTermSubmit(term) {
        youtube.get('/search', {
            params: {
                q: term
            }
        })
            .then((res) => console.log(res))
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit.bind(this)} />
            </div>
        )
    }
}

export default App;