import ExpenseList from "./ExpenseList";
import ExpenseForm, { ExpenseFormData } from "./ExpenseForm";
import { useState } from "react";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 20, category: "Entertainment" },
    { id: 3, description: "ccc", amount: 30, category: "Utilities" },
    { id: 4, description: "ddd", amount: 40, category: "Groceries" },
  ]);

  const deleteHandler = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const addExpenseHandler = (expenseItem: ExpenseFormData) => {
    const id = expenses.length + 1;
    setExpenses([...expenses, {...expenseItem, id: id}])
  }

  return (
    <>
      <ExpenseForm addExpenseHandler={addExpenseHandler}/>
      <ExpenseList expenses={expenses} onDelete={deleteHandler} />
    </>
  );
}

export default ExpenseTracker;
