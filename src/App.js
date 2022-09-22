import './App.css';
import { StrictMode } from "react";
import { render } from "react-dom";
import GenerateStatement from "./GenerateStatement";

const App = () => {
  return (
    <StrictMode>
      <div>
        <GenerateStatement />
      </div>
    </StrictMode>
  );
};

// render(<App />, document.getElementById("root"));
export default App;
