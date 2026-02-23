import React, { useState } from "react";
import fretboardImg from "../fretboard/images/fretboard.png";
import "../fretboard/memorize.css";
import { fretboardNotes } from "../fretboard/fretboardData";

export default function FiveChords() {
  const fiveChords = [
    { name: "A5", shape: [null, 0, 2, 2, null, null] },   // x022xx
    { name: "G5", shape: [3, 5, 5, null, null, null] },   // 355xxx
    { name: "E5", shape: [0, 2, 2, null, null, null] },   // 022xxx
    { name: "D5", shape: [null, null, 0, 2, 3, null] },   // xx023x
    { name: "C5", shape: [null, 3, 5, 5, null, null] },   // x355xx
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentChord = fiveChords[currentIndex];

  const activePositions = fretboardNotes.filter((pos) =>
    currentChord.shape.some((fret, index) => {
      if (fret === null) return false;

      const stringNumber = index + 1;
      return (
        pos.string === stringNumber &&
        pos.fret === fret + 1
      );
    })
  );

  const nextChord = () => {
    setCurrentIndex((prev) =>
      prev === fiveChords.length - 1 ? 0 : prev + 1
    );
  };

  const prevChord = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? fiveChords.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="fretboard-page"
      style={{ paddingTop: "4.5rem", textAlign: "center" }}
    >
      <h2>5 Chords (Power Chords)</h2>
      <h3>{currentChord.name}</h3>

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
          onClick={prevChord}
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
          onClick={nextChord}
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
