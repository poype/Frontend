import { FormEvent, useRef, useState } from "react";

const Form2 = () => {
  // use state to access input value
  const [person, setPerson] = useState({
    name: "",
    age: 0
  })

  
  const handleSubmit = (event: FormEvent) => {
    // to prevent the default action, the defaut action is load full page
    event.preventDefault();
    console.log("person: " + JSON.stringify(person))
  }

  
  // don't be afraid that use onchange listener will impact page performance. 
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" value={person.name}
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value.trim()})
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" value={person.age}
          onChange={(event) => {
            setPerson({...person, age: parseInt(event.target.value.trim())})
          }} 
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form2;