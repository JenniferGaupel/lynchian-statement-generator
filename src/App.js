import './App.css';
import { StrictMode } from "react";
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

export default App;
