import { MouseEvent } from "react";

function CityListGroup() {
  const cityList: string[] = ["北京", "上海", "广州", "深圳", "杭州", "哈尔滨"];

  const handleClick = (event: MouseEvent) => {
    // The exact type of event is SyntheticBaseEvent, this is one of built-in classes in react
    // Different browsers have different implementions of event object, to make this cross browser,
    // react team create this wrapper class around the native browser event class.

    console.log("Enter handleClick");
    console.log(event);
    console.log(event.target);
  };

  return (
    <>
      <h1>City List</h1>
      {cityList.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {cityList.map((city, index) => (
          <li
            key={city}
            className="list-group-item"
            onClick={(event) => {
              // The arrow function can have a optional parameter represent browser event
              console.log(city, index);
              handleClick(event);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CityListGroup;
