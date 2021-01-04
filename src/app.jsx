import React from "react";
import "./app.css";
import Counter from "./components/counter";
import Hello from "./components/hello";
import InputSample from "./components/inputSample";
import InputsSample from "./components/inputsSample";
import Wrapper from "./components/wrapper";

function App() {
  return (
    <ol>
      <li>
        <Wrapper>
          <Hello name="react" color="red" isSpecial={true} />
          <Hello color="orange" />
        </Wrapper>
      </li>
      <li>
        <Counter />
      </li>
      <li>
        <InputSample />
      </li>
      <li>
        <InputsSample />
      </li>
    </ol>
  );
}

export default App;
