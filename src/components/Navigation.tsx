import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav>
      Menu avec &lt;Link&gt; :
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">À propos</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
