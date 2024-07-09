interface Props {
  onSelectCategory: (category: string) => void;
}

export const categories = ["Groceries", "Utilities", "Entertainment"] as const;

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => {
        onSelectCategory(event.target.value);
      }}
    >
      <option value="" key={9999}>All Categories</option>
      {categories.map((category, idx) => <option value={category} key={idx}>{category}</option>)}
    </select>
  );
};

export default ExpenseFilter;
