import React, { useState } from "react";
export function CreatePost() {
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            body: "Lorem ipsum",
            userId: 1,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la création");
      }

      const newPost: Post = await response.json();
      console.log("Post créé:", newPost);

      // Reset le formulaire
      setTitle("");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre du post"
        disabled={loading}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Envoi..." : "Créer"}
      </button>

      {error && <p style={{ color: "red" }}>Erreur : {error}</p>}
    </form>
  );
}
