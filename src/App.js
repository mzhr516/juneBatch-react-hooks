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
import { Example02 } from "./components/useEffectHook/example2";
import { CRUD } from "./components/CRUD";
import { Model } from "./components/model";
import { useRef, useState } from "react";
import { Example001 } from "./components/useRef/Examople1";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const bottomRef = useRef(null);
  const topRef = useRef(null);

  const handleOnBottomClick = () => {
    bottomRef.current.scrollIntoView();
  };

  const handleOnTopClick = () => {
    topRef.current.scrollIntoView();
  };

  return (
    <div className="App">
      <div ref={topRef} />
      <button onClick={handleOnBottomClick}>to bottom</button>
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

      {/* <Example2/> */}
      {/* <Example02/> */}
      <div className="formValidation">
        <CRUD />
        <CRUD />
        <CRUD />
        <CRUD />
        <CRUD />
        <CRUD />
        <CRUD />
        <CRUD />
        <CRUD />
      </div>
      {/* {isOpen && <Model setIsOpen={setIsOpen} />}
      <button onClick={() => setIsOpen(true)}>open model</button> */}
      {/* -----------------------useRef-------------- */}
      <hr />
      <Example001 />
      <button onClick={handleOnTopClick}>to Top</button>
      <div ref={bottomRef} />
    </div>
  );
}

export default App;
