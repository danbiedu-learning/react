import React from "react";
import LanguageContext from "../contexts/LanguageContext";

const Field = () => {
  return (
    <div className="ui field">
      <LanguageContext.Consumer>
        {value => (
          <React.Fragment>
            <label htmlFor="">{value === 'english' ? 'Name' : '이름'}</label>
            <input type="text" />
          </React.Fragment>
        )}
      </LanguageContext.Consumer>
    </div>
  )
}

export default Field;