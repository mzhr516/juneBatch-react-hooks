import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/useStateHook/counter";
import { Example2 } from "./components/useStateHook/Example2";
import { Example3 } from "./components/useStateHook/Example3";
import { Example4 } from "./components/useStateHook/Example4";
import { Example5 } from "./components/useStateHook/Example5";
import { Example6 } from "./components/useStateHook/Example6";
import { Example7 } from "./components/useStateHook/Example7";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Example2 />
      <hr />
      <Example3 />
      <hr />
      <Example4 />
      <hr />
      <Example5 />
      <hr />
      <Example6 />
      <hr />
      <Example7 />
    </div>
  );
}

export default App;