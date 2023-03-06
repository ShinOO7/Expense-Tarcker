import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

// This onSaveExpenseData is a key inside the prop which act as a pointer to the function defined inside this component which need a parameter to

// Now through prop we will get acces to the pointer and will call this function in child component while passing the data and like this we can share data from child to parent

// So onSaveExpenseData is a event or a pointer to a function defined in this component while saveExpenseDataHandler is a event handler which is called when onSaveExpenseData is executed or saveExpenseDataHandler is the function which is pointed and defined in this component

export default NewExpense;
