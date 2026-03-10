import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Page 1 : Liste des utilisateurs
export function AllUserList() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      // Pour la clarte, error handling omis - voir section Data Fetching
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
      <h1>Utilisateurs</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
