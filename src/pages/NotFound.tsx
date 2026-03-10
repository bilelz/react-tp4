import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h2>Oups...</h2>
      <p>La page demandée n'existe pas.</p>
      <p>
        Veuillez vérifier l'URL ou revenir à
        <Link to="/"> la page d'accueil.</Link>
      </p>
    </div>
  );
}
