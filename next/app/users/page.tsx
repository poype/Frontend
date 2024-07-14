import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  // in the server component, we can use the fetch funtion to send HTTP requests to the backend.
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
};

export default UsersPage;
