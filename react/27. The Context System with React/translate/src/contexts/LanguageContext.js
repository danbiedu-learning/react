import React from 'react';

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = {
    language: 'english'
  }

  onSelectLanguage = language => {
    this.setState({ language });
  }

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onSelectLanguage: this.onSelectLanguage }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context;