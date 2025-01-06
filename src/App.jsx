import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Square />
    </>
  );
}

function Square() {
  return <button className="square">X</button>;
}

export default App;
