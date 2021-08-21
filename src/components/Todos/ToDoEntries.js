import React from "react";
const ToDoEntries = ({ todo, selectUserID, setCurrentTodo }) => {
  const actionButtonHandler = () => {
    selectUserID(todo.userId);
    setCurrentTodo(todo);
  };
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.completed === true ? "Complete" : "Incomplete"}</td>
      <td>
        <button
          type="button"
          onClick={actionButtonHandler}
          className="btn btn-primary"
        >
          View User
        </button>
      </td>
    </tr>
  );
};

export default ToDoEntries;
