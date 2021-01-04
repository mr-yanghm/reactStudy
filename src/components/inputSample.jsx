import React from "react";
import { useState } from "react";

const InputSample = (props) => {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const init = () => {
    setText("");
  };

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={init}>초기화</button>
      <div>
        <b>값 : {text}</b>
      </div>
    </div>
  );
};
export default InputSample;
