import React from 'react';
import SearchBar from "./components/SearchBar";
import env from 'react-dotenv'

class App extends React.Component {

    onSearchSubmit(item) {
        console.log(item)
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

