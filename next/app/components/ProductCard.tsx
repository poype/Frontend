"use client";

import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <>
      <div className={styles.cardContainer}>
        <button onClick={() => console.log("Click")}>Add to Cart</button>
      </div>
      <div className="p-5 my-5 bg-sky-400 text-white text-xs hover:bg-sky-500">
        <button onClick={() => console.log("Click 2222")}>Add to Cart</button>
      </div>
      <button className="btn btn-primary" onClick={() => console.log("Click 3333")}>Test DaisyUI</button>
    </>
  );
};

export default ProductCard;

// All components inside the app folder are server components by default.

// Server components cannot
// 1. Listen to browser events
// 2. Access browser APIs
// 3. Maintain state
// 4. Use effects
// These functionalities are only available in client components.
