import React from "react";

const UserDetails = ({ userId, selectedTodo }) => {
  const [userDetails, setUserDetails] = React.useState(null);

  React.useEffect(() => {
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((result) => {
          setUserDetails(result);
        });
    }
  }, [userId]);

  if (userDetails === null || selectedTodo === null) {
    return null;
  }

  return (
    <table className="table">
      <tbody>
        <tr>
          <th>ToDo ID</th>
          <td>{selectedTodo.id || null}</td>
        </tr>
        <tr>
          <th>ToDo Title</th>
          <td>{selectedTodo.title || null}</td>
        </tr>
        <tr>
          <th>User ID</th>
          <td>{userDetails.id || null}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{userDetails.name || null}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{userDetails.email || null}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserDetails;
