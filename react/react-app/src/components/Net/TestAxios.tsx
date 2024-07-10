import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const TestAxios = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // https://jsonplaceholder.typicode.com/   利用jsonplaceholder作为backend
    axios.get<User[]>("https://jsonplaceholder.typicode.com/users").then((res) => {
      // 这里的res对象是Axios对HTTP Response的一个封装，res对象中包含status、headers等属性
      console.log(res)
      // 后端返回的数据被封装到res对象中的data字段
      setUsers(res.data)
    });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => <li key={user.id}>
          <ol className="mb-3">
            <li key={0}>{user.name}</li>
            <li key={1}>{user.email}</li>
            <li key={3}>{user.phone}</li>
          </ol>
        </li>)}
      </ul>
    </div>
  );
};

export default TestAxios;
