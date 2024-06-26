import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

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
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((city, index) => (
          <li
            key={city}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={(event) => {
              // The arrow function can have a optional parameter represent browser event
              console.log(city, index);
              handleClick(event);

              setSelectedIndex(index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
