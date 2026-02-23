import React, { useState } from "react";
import fretboardImg from "../fretboard/images/fretboard.png";
import "../fretboard/memorize.css";
import { fretboardNotes } from "../fretboard/fretboardData";

export default function Maj7Chords() {
  const maj7Chords = [
    { name: "Cmaj7", shape: [null, 3, 2, 0, 0, 0] },      // x32000
    { name: "Amaj7", shape: [null, 0, 2, 1, 2, 0] },      // x02120
    { name: "Gmaj7", shape: [3, 2, 0, 0, 0, 2] },         // 320002
    { name: "Emaj7", shape: [0, 2, 1, 1, 0, 0] },         // 021100
    { name: "Dmaj7", shape: [null, null, 0, 2, 2, 2] },   // xx0222
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentChord = maj7Chords[currentIndex];

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
      prev === maj7Chords.length - 1 ? 0 : prev + 1
    );
  };

  const prevChord = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? maj7Chords.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="fretboard-page"
      style={{ paddingTop: "4.5rem", textAlign: "center" }}
    >
      <h2>Major 7 Chords</h2>
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
