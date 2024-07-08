import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form3 = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const errorText =
    errors.name?.type === "minLength"
      ? "The name must be at least 3 characters."
      : errors.name?.type === "required"
      ? "The name field is required"
      : undefined;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        {/* register method return the object that contains onChange, ref, onBlur attributes */}
        <input id="name" type="text" className="form-control" {...register("name", {required: true, minLength: 3})} />
        {errorText && <p className="text-danger">{errorText}</p>}
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
