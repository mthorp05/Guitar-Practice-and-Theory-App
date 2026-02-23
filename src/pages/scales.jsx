import { Link } from "react-router-dom";

export default function scales() {
  return (
    <div className="home">
      <h1>Sca;es</h1>

      <div className="card-grid">
        <Link to="/scales/memorize" className="card">Memorize</Link>
        <Link to="/scales/slideshow" className="card">Slideshow</Link>
        <Link to="/scales/games" className="card">Games</Link>
      </div>
    </div>
  );
}
