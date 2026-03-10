import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Page 2 : Profil utilisateur avec ses posts
export function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState<{ name: string; email: string }>(null!);
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      setLoading(true);

      // Fetch en parallele avec Promise.all
      const [userResponse, postsResponse] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
      ]);

      const userData = await userResponse.json();
      const postsData = await postsResponse.json();

      setUser(userData);
      setPosts(postsData);
      setLoading(false);
    }

    fetchUserData();
  }, [userId]); // Re-fetch si on navigue vers un autre utilisateur

  if (loading) return <div>Chargement...</div>;

  return (
    <div>
      <Link to="/users">← Retour a la liste</Link>

      <h1>{user?.name}</h1>
      <p>Email : {user?.email}</p>

      <h2>Articles de {user.name}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
