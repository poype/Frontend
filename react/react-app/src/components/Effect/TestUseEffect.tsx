// The react component shoule be pure functions, a pure function should not have any side effects and should return same result if we give it the same input.
// To keep components pure, keep change out of the render phase.
// But there are situations where we might need to store some data in local storage of browser, or we might to call the server to fetch data. 
// Those two situations are not about rendering a component, they have nothing to do with returning JSX markup.

// some side effect examples:
// Store data in local storage
// Call the server to fetch/save data
// Modify the DOM

// useEffect to execute a piece of code after a component is rendered

import { useEffect, useRef } from "react";


const TestUseEffect = () => {
  const ref = useRef<HTMLInputElement>(null);

  // we can only call the effect hook at the top level of our components, so we can not call effect hook in loops or if statements.
  useEffect(() => {
    // side effect, it change something outside the component
    if (ref.current) 
      ref.current.focus();
  })

  // another effect hook, 
  useEffect(() => {
    document.title = "Test Effect";
  })
  

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  )
}

export default TestUseEffect;
