import "./components/HelloWorld";
import "./App.css";
// vanilla css has a problem that same class name in different css file impact each other. name clashes

import ProductList from "./components/Effect/ProductList"; 

function App() {
  return (
    <>
      <ProductList />
    </>
  );
}

export default App;
