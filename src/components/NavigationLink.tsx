import { NavLink } from "react-router-dom";

export function NavigationLink() {
  return (
    <nav>
      Menu avec &lt;Navlink&gt; :
      <ul>
        <li>
          {" "}
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

// CSS
// .active { color: blue; font-weight: bold; }
