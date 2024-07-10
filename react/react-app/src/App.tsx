import "./components/HelloWorld";
import "./App.css";
// vanilla css has a problem that same class name in different css file impact each other. name clashes


import TestAxios from "./components/Net/TestAxios";

function App() {
  return (
    <>
      <TestAxios />
    </>
  );
}

export default App;
