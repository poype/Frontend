import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const TestAxios2 = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      // catch clause is converted to try-catch block
      try {
        setLoading(true);

        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) { // catch clause variable type annotation must be any or unknown, so we can not specify "AxiosError" at here

        // as: type assertion
        setError((err as AxiosError).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
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

export default TestAxios2;
