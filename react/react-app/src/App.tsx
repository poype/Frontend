import "./App.css";
import "./components/HelloWorld";
import ListGroup from "./components/ListGroup";

function App() {
  const cityList: string[] = ["北京", "上海", "广州", "深圳", "杭州", "哈尔滨"];
  const colorList = ["red", "yellow", "blue", "green", "orange"];

  const handleSelectItem = (item: String) => {
    console.log(item + " is selected");
  };

  return (
    <div>
      <ListGroup
        items={cityList}
        heading="City List"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={colorList}
        heading="Color List"
        onSelectItem={handleSelectItem}
      />

      <img
        src="/src/assets/state_vs_props.png"
        alt="React state vs props"
        className="w-75"
      />
    </div>
  );
}

export default App;
