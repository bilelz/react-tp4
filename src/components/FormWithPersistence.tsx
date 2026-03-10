import { useState, useEffect } from "react";

export function FormWithPersistence() {
  const [name, setName] = useState("");

  // Charger depuis localStorage au mount
  useEffect(() => {
    const saved = localStorage.getItem("name");
    if (saved) {
      setName(saved);
    }
  }, []);

  // Sauvegarder à chaque changement
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return <input value={name} onChange={(e) => setName(e.target.value)} />;
}
