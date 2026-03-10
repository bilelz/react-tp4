import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function BlogUserList() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  // const [userId, setUserId] = useState<number>(null!);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  if (loading) return <div>Chargement...</div>;
  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ textAlign: "left" }}>
            <Link to={`/user/${user.id}`}>
              #{user.id} {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
