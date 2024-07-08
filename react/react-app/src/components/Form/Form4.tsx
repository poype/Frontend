import { FieldValues, useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  // Although zod provide default error message, we can customize error message
  name: z.string().min(3, {message: "Name must be at least 3 characters."}),
  age: z.number({invalid_type_error: "Age field is required"}).min(18)
});

type FormData = z.infer<typeof schema>;

const Form4 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input id="name" type="text" className="form-control" {...register("name")} />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        {/* since the age is number, {valueAsNumber: true} is required */}
        <input id="age" type="number" className="form-control" {...register("age", {valueAsNumber: true})} />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form4;
