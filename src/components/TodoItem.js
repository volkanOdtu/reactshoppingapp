import React from "react";

function TodoItem(props) {
  let styleItem = {
    color: "red",
    fontStyle: "italic",
    textDecoration: "line-through"
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.eleman.completed}
        onChange={() => props.Change(props.eleman.id)}
      />
      <p style={props.eleman.completed ? styleItem : null}>
        {props.eleman.item}
      </p>
    </div>
  );
}
export default TodoItem;
