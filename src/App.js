import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import { useState, useEffect } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(true);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      console.log(prevExpenses);
      return [expense, ...prevExpenses];
    });
  };

  useEffect(() => {
    let timer;
    if (show) {
      timer = setInterval(() => {
        console.log("yes");
        setCounter((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      console.log("out");
      clearInterval(timer);
    };
  }, [show]);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
      {show ? (
        <p
          onClick={() => {
            setCounter((prev) => prev + 10);
          }}
        >
          {counter}
        </p>
      ) : null}

      <button
        onClick={() => {
          setShow(false);
        }}
      >
        Out
      </button>
    </div>
  );
}

export default App;
