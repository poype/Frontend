// The second argument to the effect hook is the dependencies array
// if leave it out, react will execute effect hook after every render
// if pass empty array, react will execute effect hook only once the first time the component is rendered.
// if add one or more values here, react will execute effect hook every time any of those values changes. 


import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState<string[]>([]);
  const [category, setCategory] = useState<string>("");

  // by default, the effect hook execute after each render.
  useEffect(() => {
    console.log("Fetching products in ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]); // effect hook will be executed when category value changes
  // empty array means the effect is not dependent on any values, it will be executed only once.

  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ul>
        {products.map((product, idx) => (
          <li key={idx}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
