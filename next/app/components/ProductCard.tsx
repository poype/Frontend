"use client"

import React from "react";

const ProductCard = () => {
  return (
    <div>
      <button onClick={() => console.log('Click')}>Add to Cart</button>
    </div>
  )
  
};

export default ProductCard;

// All components inside the app folder are server components by default.