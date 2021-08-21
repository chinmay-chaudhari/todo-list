import React from "react";
import ToDoEntries from "../Todos/ToDoEntries";

//https://jsonplaceholder.typicode.com/todos

const TodosTable = ({ todos, setUserId, setSelectedTodo }) => {
  const [sorting, setSorting] = React.useState(true);

  const selectUserID = (userId) => {
    setUserId(userId);
  };

  const setCurrentTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const sortHandler = () => {
    setSorting(!sorting);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th onClick={sortHandler}>ToDo ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos
            .sort((a, b) => (sorting ? a.id - b.id : b.id - a.id))
            .map((item, index) => {
              return (
                <ToDoEntries
                  todo={item}
                  key={index}
                  selectUserID={selectUserID}
                  setCurrentTodo={setCurrentTodo}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TodosTable;
