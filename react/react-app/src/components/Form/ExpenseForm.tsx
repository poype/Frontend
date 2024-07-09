import { categories } from "./ExpenseFilter";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z.number().min(0.01).max(100_00),
  category: z.enum(categories)
});

export type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  addExpenseHandler: (expenseItem: ExpenseFormData) => void
}

const ExpenseForm = ({ addExpenseHandler }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });


  const onSubmit = (data: ExpenseFormData) => {
    addExpenseHandler(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input {...register("description")} id="description" type="text" className="form-control" />
        {errors.description && <p className="text-danger">{errors.description.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input {...register("amount", {valueAsNumber: true})} id="amount" type="number" className="form-control" />
        {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} className="form-select">
          <option value="" key={9999}>All Categories</option>
          {categories.map((category, idx) => <option value={category} key={idx}>{category}</option>)}
        </select>
        {errors.category && <p className="text-danger">{errors.category.message}</p>}
      </div>
      <button className="btn btn-primary mb-5" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
