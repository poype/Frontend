import React from "react";

interface Props {
  params: {
    id: number;
  };
}


// http://localhost:3000/users/5
function UserDetailPage({ params: { id } }: Props) {
  return <div>UserDetailPage {id}</div>;
}

export default UserDetailPage;
