import { useNavigate, Link, useLocation } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const showBack = location.pathname !== "/";

  return (
    <div className="Navbar">
      <div className="nav-left">
        {showBack && (
          <button className="nav-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
        )}
      </div>

      <div className="nav-center">
        <Link to="/" className="home-btn">
          Home
        </Link>
      </div>

      <div className="nav-right" />
    </div>
  );
}
