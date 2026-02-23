import { Link } from "react-router-dom";

export default function fretboard() {
  return (
    <div className="home">
      <h1>Fretboard</h1>

      <div className="card-grid">
        <Link to="/fretboard/memorize" className="card">Memorize</Link>
        <Link to="/fretboard/games" className="card">Games</Link>
      </div>
    </div>
  );
}
