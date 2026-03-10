import { useState, useEffect } from "react";

export function UserPosts({ userId }: { userId: number }) {
  const [posts, setPosts] = useState<
    { id: number; title: string; body: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      setLoading(true);

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      );
      const data = await response.json();

      setPosts(data);
      setLoading(false);
    }

    fetchPosts();

    // Cleanup : annuler la requete si userId change ou composant disparait
    return () => controller.abort();
  }, [userId]); // Re-fetch quand userId change

  if (loading) return <div>Chargement...</div>;

  return (
    <div>
      <h2>Posts de l'utilisateur {userId}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ textAlign: "left" }} title={post.body}>
            Post #{post.id} : {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
