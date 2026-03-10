import { useState, useEffect } from "react";

export function RandomUsers() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const response = await fetch("https://randomuser.me/api/?results=10");
      const data = await response.json();
      setUsers(data.results);
      setLoading(false);
    }

    fetchUsers();
  }, [refreshKey]); // Re-fetch quand refreshKey change

  function handleRefresh() {
    setRefreshKey((key) => key + 1); // Change refreshKey → re-fetch !
  }

  return (
    <div>
      <button onClick={handleRefresh} disabled={loading}>
        {loading ? "Chargement..." : "Rafraîchir"}
      </button>

      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            {user.name.first} {user.name.last} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
