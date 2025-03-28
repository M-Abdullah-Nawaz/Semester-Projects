import "./App.css";
import { Route, Routes } from "react-router-dom";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponentWithoutState from "./components/ClassComponentWithoutState";
import ClassComponentWithState from "./components/ClassComponentWithState";

function App() {
  return (
    <Routes>
      {/* <Route
        path="/home"
        element={<ClassComponentWithoutState productId={1} />}
      ></Route>
      <Route
        path="/home"
        element={<ClassComponentWithState productId={1} />}
      ></Route> */}
      <Route path="/home" element={<FunctionalComponent />}></Route>
    </Routes>
  );
}

export default App;
