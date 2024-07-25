import Link from "next/link";
import React from "react";
import { sort } from 'fast-sort';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  searchParams: {
    sortOrder: string;
  }
}

const UsersPage = async ({searchParams: { sortOrder }}: Props) => {
  // in the server component, we can use the fetch funtion to send HTTP requests to the backend.
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  
  // whenever we use the fetch function to get some data, Next.js will automatically store the result in date cache which is based on the file system.
  
  // to disable caching
  // const res = await fetch(
  //   "https://jsonplaceholder.typicode.com/users", 
  //   {cache: 'no-store'}
  // );

  // to keep data fresh for a certain period of time
  // next.js is going to run a background job and get fresh data from backend every 10 seconds.
  // const res = await fetch(
  //   "https://jsonplaceholder.typicode.com/users", 
  //   {next: { revalidate: 10 }}
  // );
  
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(sortOrder === "name" ? u => u.name : u => u.email);

  return (
    <>
      <Link href="/users/new">New User</Link>
      <h1>Users</h1>
      {/* in develop mode, we will get a new time value in each request.
          but if you build this application for production, you will see that the timestamp is not going to change.
          because Next.js will treat this page as a static page */}
      {/* If you disable the cache of fetch method, Next.js will not generate static page during build time, you will see a fresh time value for each request. */}
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>

      <table className="table">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(user => <tr className="hover">
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>)}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;

// In Next.js, rendering can happen on the client or on the server
// If it happens on the server, it can happen at build time, which is called static rendering. or at request time, which is called dynamic rendering.  
