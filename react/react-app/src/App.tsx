import "./App.css";
import "./components/HelloWorld";
import "./App.css";
// vanilla css has a problem that same class name in different css file impact each other. name clashes

import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <>
      <ExpandableText maxChars={20}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        soluta doloremque consequuntur ullam fugiat blanditiis, aspernatur sed
        eius iure eos quae perferendis? Assumenda quisquam fuga et consequatur
        quam? Rerum, ipsa.
      </ExpandableText>
    </>
  );
}

export default App;
