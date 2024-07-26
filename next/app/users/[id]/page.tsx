import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: number;
  };
}


// http://localhost:3000/users/5
function UserDetailPage({ params: { id } }: Props) {
  // render the [not-found.js file]
  if (id > 10) {
    notFound()
  }

  return <div>UserDetailPage {id}</div>;
}

export default UserDetailPage;
