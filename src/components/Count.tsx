import { useEffect, useState } from "react";

export function Count() {
  const [count, setCount] = useState(0);

  // ❌ S'exécute après CHAQUE rendu
  useEffect(() => {
    console.log("Rendu HTML à jour!");
  });

  // ✅ S'exécute UNE FOIS au montage
  useEffect(() => {
    console.log("Composant monté !");
    return () => {
      console.log("Composant démonté !"); // Nettoyage ici
    };
  }, []); // Tableau vide => une seule fois

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
