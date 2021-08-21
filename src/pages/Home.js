import React from "react";
import TodosTable from "../components/Todos/TodosTable";
import UserDetails from "../components/UserDetails/UserDetails";

const Home = () => {
  const [todos, setTodos] = React.useState([]);
  const [filteredTodos, setFilteredTodos] = React.useState([]);
  const [userId, setUserId] = React.useState(null);
  const [selectedTodo, setSelectedTodo] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((result) => {
        setTodos(result);
        setFilteredTodos(result);
      });
  }, []);

  const searchBoxHandler = (e) => {
    let filteredTodoList = [];

    console.log(e.target.value);

    filteredTodoList = todos.filter((item) =>
      item.title.includes(e.target.value)
    );
    setFilteredTodos(filteredTodoList);
  };

  return (
    <div className="container-fluid mt-4">
      <div className="d-flex gap-5">
        <div>
          <div className="d-flex gap-5">
            <h2>Todos</h2>
            <input
              type="text"
              name="searchBox"
              onChange={searchBoxHandler}
              placeholder={"Search"}
              className="mt-2 mb-2"
            />
          </div>
          <TodosTable
            todos={filteredTodos}
            setUserId={setUserId}
            setSelectedTodo={setSelectedTodo}
          />
        </div>
        <div>
          <h2>User Details</h2>
          <UserDetails userId={userId} selectedTodo={selectedTodo} />
        </div>
      </div>
    </div>
  );
};

export default Home;
