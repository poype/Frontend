import { FormEvent, useRef } from "react";

const Form = () => {
  // accessing input field to get the value
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const person = {
    name: "",
    age: 0
  }

  
  const handleSubmit = (event: FormEvent) => {
    // to prevent the default action, the defaut action is load full page
    event.preventDefault();
    
    // get the input element value
    person.name = nameRef.current?.value ?? "";
    person.age = parseInt(ageRef.current?.value ?? "") 

    console.log("person: " + JSON.stringify(person))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" ref={nameRef} />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input id="age" type="number" className="form-control" ref={ageRef} />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
}

export default Form;