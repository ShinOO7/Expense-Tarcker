import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  // useState will execute once at the initialization

  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Click Here</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;

// useState is a react hook which is used to rerender a componenet when a specific value inside the componenet changes, it return an array whose initial value is the value which is going through a change and the second value is a function through which we can change the value

// remember when the state of a var is updated through the function setXYZ() then the react will call that component again but will not execute useState line again bcuz react already know that the state for that variable is already initialized and so it will take the new value from setXYZ
