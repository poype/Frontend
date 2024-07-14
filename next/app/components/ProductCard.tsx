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

// Server components cannot
// 1. Listen to browser events
// 2. Access browser APIs
// 3. Maintain state
// 4. Use effects
// These functionalities are only available in client components.