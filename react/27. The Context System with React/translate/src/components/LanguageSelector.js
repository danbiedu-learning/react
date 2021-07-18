import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  
  render() {
    return (
      <div>
        <i className="flag us" onClick={() => this.context.onSelectLanguage('english')} />
        <i className="flag kr" onClick={() => this.context.onSelectLanguage('korean')} />
        <div>{this.context.language}</div>
      </div>
    )
  }
}

export default LanguageSelector;