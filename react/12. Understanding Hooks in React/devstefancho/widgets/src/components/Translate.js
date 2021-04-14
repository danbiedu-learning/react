import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const Translate = ({ options }) => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState(options[0]);
  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="inputText">Text</label>
        <input
          id="inputText"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
