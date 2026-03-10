import { useState, useEffect } from "react";

export function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Setup : démarrer le timer
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    // Cleanup : arrêter le timer
    return () => {
      clearInterval(id);
      console.log("Timer nettoyé !");
    };
  }, []); // Une seule fois

  return <div>Secondes : {seconds}</div>;
}
