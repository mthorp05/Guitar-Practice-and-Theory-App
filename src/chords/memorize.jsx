import React from "react";
import { useNavigate } from "react-router-dom";
import "../fretboard/memorize.css";

export default function FretboardMemorize() {
  const navigate = useNavigate();

  const chordTypes = [
  { label: "Major", path: "/chords/memorize/major" },
  { label: "Minor", path: "/chords/memorize/minor" },
  { label: "7", path: "/chords/memorize/7" },
  { label: "5", path: "/chords/memorize/5" },
  { label: "Maj7", path: "/chords/memorize/maj7" },
  { label: "m7", path: "/chords/memorize/m7" },
];

  return (
    <div
      className="fretboard-page"
      style={{
        paddingTop: "4.5rem",
        textAlign: "center",
      }}
    >
      <h2>Memorize Chords</h2>
      <p>Select a chord type</p>

      <div
        style={{
          marginTop: "3rem",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          maxWidth: "600px",
          marginInline: "auto",
        }}
      >
        {chordTypes.map((type) => (
          <button
            key={type.label}
            onClick={() => navigate(type.path)}
            style={{
              padding: "1rem",
              fontSize: "1.1rem",
              borderRadius: "0.6rem",
              border: "none",
              backgroundColor: "#334155",
              color: "#f1f5f9",
              fontWeight: 600,
              cursor: "pointer",
              transition: "0.2s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#475569")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "#334155")
            }
          >
            {type.label}
          </button>
        ))}
      </div>
    </div>
  );
}
