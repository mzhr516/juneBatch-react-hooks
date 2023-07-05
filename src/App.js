import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/useStateHook/counter";
import { Example2 } from "./components/useStateHook/Example2";
import { Example3 } from "./components/useStateHook/Example3";
import { Example4 } from "./components/useStateHook/Example4";
import { Example5 } from "./components/useStateHook/Example5";
import { Example6 } from "./components/useStateHook/Example6";
import { Example7 } from "./components/useStateHook/Example7";
import { FormValidation } from "./components/useStateHook/FormValidation";
import { ObtimizeFormValidation } from "./components/useStateHook/obtimizeFormValidation";
import { ValidationWithLibrary } from "./components/useStateHook/validationWithLib";
import { Example1 } from "./components/useEffectHook/example1";

function App() {
  return (
    <div className="App">
      {/* useState */}

      {/* <Counter />
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
      <hr />
      <div className="formValidation">
        <FormValidation />
        <hr />
        <h1>custom validation</h1>
        <ObtimizeFormValidation />
        <hr />
        <h1>validation with lib</h1>
        <ValidationWithLibrary />
      </div> */}

      {/* ----------------------------------------------------- */}

      {/* useEffect */}

      <Example1/>

    </div>
  );
}

export default App;
