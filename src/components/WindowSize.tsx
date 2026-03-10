import { useState, useEffect } from "react";

export function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Setup : ajouter le listener
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup : retirer le listener
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("WindowSize nettoyé !");
    };
  }, []); // Une seule fois

  return <div>Largeur : {width}px</div>;
}
