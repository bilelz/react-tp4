import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function AllPostList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);

  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = 10;

  useEffect(() => {
    async function fetchPosts() {
      const start = (page - 1) * limit;
      // Pour la clarte, error handling omis - voir section Data Fetching
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`,
      );
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, [page]); // Re-fetch quand la page change

  return (
    <div>
      <h1>Posts - Page {page}</h1>

      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <div>
        <button
          onClick={() =>
            page > 1 && setSearchParams({ page: (page - 1).toString() })
          }
          disabled={page === 1}
        >
          Precedent
        </button>

        <span>Page {page}</span>

        <button
          onClick={() => setSearchParams({ page: (page + 1).toString() })}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
