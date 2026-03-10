import { useState, useEffect } from "react";
import { DataLoader } from "./DataLoader";

export function SearchResults() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [weatherLatLon, setWeatherLatLon] = useState<{
    lat: number;
    lon: number;
  }>(null!);

  // ✅ S'exécute quand searchTerm change
  useEffect(() => {
    if (searchTerm.length < 3) return; // Ne pas chercher pour des termes trop courts
    console.log(`Recherche pour : ${searchTerm}`);
    setLoading(true);

    // Faire le fetch...
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${searchTerm}&addressdetails=1&limit=5&featuretype=city`,
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        setLoading(false);
      });
  }, [searchTerm]); // Re-exécute si searchTerm change

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* Afficher results */}

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {results.length} résultat(s)
          <ul style={{ textAlign: "left" }}>
            {results.map((result: any) => (
              <li key={result.place_id}>
                {result.display_name}
                <a
                  href={`https://www.openstreetmap.org/?mlat=${result.lat}&mlon=${result.lon}#map=12/${result.lat}/${result.lon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir sur OSM
                </a>
                <button
                  onClick={() =>
                    setWeatherLatLon({
                      lat: parseFloat(result.lat),
                      lon: parseFloat(result.lon),
                    })
                  }
                >
                  Météo ici
                </button>
              </li>
            ))}
          </ul>
          {weatherLatLon?.lat && weatherLatLon?.lon ? (
            <DataLoader lat={weatherLatLon?.lat} lon={weatherLatLon?.lon} />
          ) : (
            "Cliquer sur un résultat pour voir la météo"
          )}
        </div>
      )}
    </div>
  );
}
