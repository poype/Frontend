import "./App.css";
import "./components/HelloWorld";
import ListGroup from "./components/ListGroup";

function App() {
  const cityList: string[] = ["北京", "上海", "广州", "深圳", "杭州", "哈尔滨"];
  const colorList = ["red", "yellow", "blue", "green", "orange"];

  return (
    <div>
      <ListGroup items={cityList} heading="City List" />
      <ListGroup items={colorList} heading="Color List" />
    </div>
  );
}

export default App;
