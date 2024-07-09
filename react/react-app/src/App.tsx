import "./components/HelloWorld";
import "./App.css";
// vanilla css has a problem that same class name in different css file impact each other. name clashes

import TestUseEffect from "./components/Effect/TestUseEffect";

function App() {
  return (
    <>
      <TestUseEffect />
    </>
  );
}

export default App;
