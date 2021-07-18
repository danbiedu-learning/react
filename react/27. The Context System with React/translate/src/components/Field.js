import React from "react";
import LanguageContext from "../contexts/LanguageContext";

const Field = () => {
  return (
    <div className="ui field">
      <LanguageContext.Consumer>
        {({ language }) => (
          <React.Fragment>
            <label htmlFor="">{language === 'english' ? 'Name' : '이름'}</label>
            <input type="text" />
          </React.Fragment>
        )}
      </LanguageContext.Consumer>
    </div>
  )
}

export default Field;