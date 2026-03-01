import React from "react";
import { useNavigate } from "react-router-dom";
import "../fretboard/memorize.css";

export default function ScaleMemorize() {
  const navigate = useNavigate();

  const scaleTypes = [
    { label: "Major", path: "/scales/memorize/major" },
    { label: "Minor", path: "/scales/memorize/minor" },
    { label: "Dom 7th", path: "/scales/memorize/dominant7" },
  ];

  return (
    <div
      className="fretboard-page"
      style={{
        paddingTop: "4.5rem",
        textAlign: "center",
      }}
    >
      <h2>Memorize Scales</h2>
      <p>Select a scale type</p>

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
        {scaleTypes.map((type) => (
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
