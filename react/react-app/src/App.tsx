import "./App.css";
import "./components/HelloWorld";
import Block from "./components/vanilla_css/";
// If we don't supply a file and here we are referencing a folder, the compiler will look for a file called index.
import "./App.css";
// vanilla css has a problem that same class name in different css file impact each other. name clashes

import Like from "./components/Like";

function App() {
  return (
    <>
      <Block />
      <Like onClick={() => console.log("like clicked")} />
    </>
  );
}

export default App;
