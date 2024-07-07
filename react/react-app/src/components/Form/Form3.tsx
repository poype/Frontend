import { FieldValues, useForm } from "react-hook-form";

const Form3 = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        {/* register method return the object that contains onChange, ref, onBlur attributes */}
        <input id="name" type="text" className="form-control" {...register("name")} />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input id="age" type="number" className="form-control" {...register("age")} />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form3;
