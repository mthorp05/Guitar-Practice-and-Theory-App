import { Link } from "react-router-dom";

export default function chords() {
  return (
    <div className="home">
      <h1>Chords</h1>

      <div className="card-grid">
        <Link to="/chords/memorize" className="card">Memorize</Link>
        <Link to="/chords/slideshow" className="card">Slideshow</Link>
        <Link to="/chords/games" className="card">Games</Link>
      </div>
    </div>
  );
}
