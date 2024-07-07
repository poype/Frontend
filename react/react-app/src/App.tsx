import "./App.css";
import "./components/HelloWorld";
import "./App.css";
// vanilla css has a problem that same class name in different css file impact each other. name clashes

import {Form, Form2} from "./components/Form"

function App() {
  return (
    <>
      <Form/>
      
      <Form2/>
    </>
  );
}

export default App;
