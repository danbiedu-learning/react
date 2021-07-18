import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = {
    language: 'english'
  }

  onSelectLanguage = language => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">Languages
        <i className="flag us" onClick={() => this.onSelectLanguage('english')} />
        <i className="flag kr" onClick={() => this.onSelectLanguage('korean')} />
        <div>{this.state.language}</div>
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    )
  }
}

export default App;