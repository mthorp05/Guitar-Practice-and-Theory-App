import React, { useState } from "react";
import fretboardImg from "../fretboard/images/fretboard.png";
import "../fretboard/memorize.css";
import { fretboardNotes } from "../fretboard/fretboardData";

export default function MajorChords() {
  const majorChords = [
    { name: "C Major", shape: [null, 3, 2, 0, 1, 0] },   // x32010
    { name: "D Major", shape: [null, null, 0, 2, 3, 2] }, // xx0232
    { name: "E Major", shape: [0, 2, 2, 1, 0, 0] },       // 022100
    { name: "G Major", shape: [3, 2, 0, 0, 0, 3] },       // 320003
    { name: "A Major", shape: [null, 0, 2, 2, 2, 0] },    // x02220
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentChord = majorChords[currentIndex];

  const activePositions = fretboardNotes.filter((pos) =>
  currentChord.shape.some((fret, index) => {
    if (fret === null) return false;

    const stringNumber = index + 1; // ✅ keep this
    return (
      pos.string === stringNumber &&
      pos.fret === fret + 1        // ✅ keep this
    );
  })
);



  const nextChord = () => {
    setCurrentIndex((prev) =>
      prev === majorChords.length - 1 ? 0 : prev + 1
    );
  };

  const prevChord = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? majorChords.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="fretboard-page"
      style={{ paddingTop: "4.5rem", textAlign: "center" }}
    >
      <h2>Major Chords</h2>
      <h3>{currentChord.name}</h3>

      {/* Fretboard */}
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

      {/* Navigation Buttons */}
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
