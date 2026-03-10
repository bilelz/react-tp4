import { useState, useEffect } from "react";
import { UserPosts } from "./UserPosts";

export function UserList() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [userId, setUserId] = useState<number>(null!);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>(null!);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError("Probleme de chargement des utilisateurs");
      } finally {
        setLoading(false); // Toujours appelé
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <div>Chargement...</div>;
  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users?.map((user) => (
          <li key={user.id} style={{ textAlign: "left" }}>
            #{user.id} {user.name}
            <button onClick={() => setUserId(user.id)}>
              Afficher les posts
            </button>
          </li>
        ))}
      </ul>

      {userId && <UserPosts userId={userId} />}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}
