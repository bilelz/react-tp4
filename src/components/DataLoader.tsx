import { useState, useEffect } from "react";

export function DataLoader({
  lat = 48.8566,
  lon = 2.3522,
}: {
  lat?: number;
  lon?: number;
}) {
  const [data, setData] = useState<any>(null);

  const API_KEY = "25228463ded3e02ffde774f620521787";

  useEffect(() => {
    // Fetch une seule fois au chargement

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=fr&units=metric`, // https://openweathermap.org/current?collection=current_forecast
    )
      .then((res) => res.json())
      .then((data: any) => setData(data))
      .catch((error) => {
        console.error(error);
        return null;
      });
  }, [lat, lon]); // Fetch uniquement au mount

  return (
    <div>
      <h4>Météo pour {data?.name}</h4>
      <p>
        Le temps est {data?.weather[0].description}{" "}
        <strong>{data?.main.temp}°C</strong>
      </p>
    </div>
  );
}
