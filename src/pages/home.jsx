import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <h1>Guitar Theory Trainer</h1>
      <p>Master the fretboard, scales, and chords</p>

      <div className="card-grid">
        <Link to="/chords" className="card">
          <h2>Chords</h2>
          <p>Shapes, memorization, and games</p>
        </Link>

        <Link to="/scales" className="card">
          <h2>Scales</h2>
          <p>Learn patterns and positions</p>
        </Link>

        <Link to="/fretboard" className="card">
          <h2>Fretboard</h2>
          <p>Memorize every note</p>
        </Link>
      </div>
    </div>
  );
}
