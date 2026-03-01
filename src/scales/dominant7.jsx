import React, { useState } from "react";
import fretboardImg from "../fretboard/images/fretboard.png";
import "../fretboard/memorize.css";
import { fretboardNotes } from "../fretboard/fretboardData";
import { dominant7Scales } from "./scaleData";

export default function Dominant7Scales() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentScale = dominant7Scales[currentIndex];

  const activePositions = fretboardNotes.filter((pos) =>
    currentScale.positions.some(
      (sp) => pos.string === sp.string && pos.fret === sp.fret + 1
    )
  );

  const nextScale = () => {
    setCurrentIndex((prev) =>
      prev === dominant7Scales.length - 1 ? 0 : prev + 1
    );
  };

  const prevScale = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? dominant7Scales.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="fretboard-page"
      style={{ paddingTop: "4.5rem", textAlign: "center" }}
    >
      <h2>Dominant 7th Scales</h2>
      <h3>{currentScale.name}</h3>

      <div
        className="fretboard-container"
        style={{ position: "relative", display: "inline-block" }}
      >
        <img
          src={fretboardImg}
          alt="Guitar Fretboard"
          className="fretboard-img"
        />

        {activePositions.map((pos, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#1bf0ff",
              top: pos.y,
              left: pos.x,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
        ))}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={prevScale}
          style={{
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "0.4rem",
            border: "none",
            backgroundColor: "#334155",
            color: "#f1f5f9",
            cursor: "pointer",
          }}
        >
          Previous
        </button>

        <button
          onClick={nextScale}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "0.4rem",
            border: "none",
            backgroundColor: "#334155",
            color: "#f1f5f9",
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
