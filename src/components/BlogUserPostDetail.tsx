import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export function BlogUserPostDetail() {
  const [postDetail, setPostDetail] = useState<{
    id: number;
    title: string;
    body: string;
  }>(null!);
  const [loading, setLoading] = useState(true);

  const { userId, postId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      setLoading(true);

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
      const data = await response.json();

      setPostDetail(data);
      setLoading(false);
    }

    fetchPosts();

    // Cleanup : annuler la requete si userId change ou composant disparait
    return () => controller.abort();
  }, [userId, postId]); // Re-fetch quand userId change ou postId change

  if (loading) return <div>Chargement...</div>;

  return (
    <div>
      {/* Breadcrumbs */}
      <nav>
        <Link to="/">Accueil</Link> /
        <Link to={`/user/${userId}`}>Posts de #{userId}</Link> / /
        <span>Post #{postId}</span>
      </nav>
      <h1>
        Post #{postId} de l'utilisateur {userId}
      </h1>
      {loading ? "Chargement..." : null}
      <p>{postDetail.title}</p>
      <p>{postDetail.body}</p>
    </div>
  );
}
