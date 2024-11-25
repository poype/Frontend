import { useState } from "react";
import styles from "./block.module.css"
// styles here is just a regular javascript object that has all the classes we have defined in the file.
// every classes we defined in the file is going to be a property on that object.

import { CiCalendar } from "react-icons/ci";

function Block() {
  const [tags, setTags] = useState(["happy", "cheerful"])

  // Add
  setTags([...tags, "exciting"])

  // remove
  setTags(tags.filter(tag => tag !== "cheerful"))

  // update
  setTags(tags.map(tag => tag === "happy" ? "happiness" : tag))

  return (
    <>
      <div className={styles.vanillaCss1}></div>
      {/* mutiple css class name */}
      <div className={[styles.one, styles.two].join(' ')}></div>

      <p style={{backgroundColor: "blue", color: "red"}}>test inline css</p>

      <CiCalendar color="gold" size={40}/>
      {/* https://react-icons.github.io/react-icons/ */}
    </>
    
  );
}

export default Block;