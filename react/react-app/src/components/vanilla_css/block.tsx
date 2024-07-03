import styles from "./block.module.css"
// styles here is just a regular javascript object that has all the classes we have defined in the file.
// every classes we defined in the file is going to be a property on that object.

function Block() {

  return (
    <>
      <div className={styles.vanillaCss1}></div>
      {/* mutiple css class name */}
      <div className={[styles.one, styles.two].join(' ')}></div>
    </>
    
  );
}

export default Block;