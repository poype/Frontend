import "./App.css";
import "./components/HelloWorld";
import "./App.css";
// vanilla css has a problem that same class name in different css file impact each other. name clashes

import Form from "./components/Form"

function App() {
  return (
    <>
      <Form/>
    </>
  );
}

export default App;
