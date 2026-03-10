import { useState, useEffect } from "react";

export function PostList() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    }

    fetchPosts();
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
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
