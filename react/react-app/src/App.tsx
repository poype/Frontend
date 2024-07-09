import "./components/HelloWorld";
import "./App.css";
// vanilla css has a problem that same class name in different css file impact each other. name clashes

import ExpenseTracker from "./components/Form/ExpenseTracker";

function App() {
  return (
    <>
      <ExpenseTracker />
    </>
  );
}

export default App;
