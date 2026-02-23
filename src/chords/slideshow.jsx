import React, { useState, useEffect } from "react";
import fretboardImg from "../fretboard/images/fretboard.png";
import "../fretboard/memorize.css";
import { fretboardNotes } from "../fretboard/fretboardData";

// ✅ MOVE THIS OUTSIDE THE COMPONENT
const allChords = [
  // Major
  { name: "C Major", shape: [null, 3, 2, 0, 1, 0] },
  { name: "D Major", shape: [null, null, 0, 2, 3, 2] },
  { name: "E Major", shape: [0, 2, 2, 1, 0, 0] },
  { name: "G Major", shape: [3, 2, 0, 0, 0, 3] },
  { name: "A Major", shape: [null, 0, 2, 2, 2, 0] },

  // Minor
  { name: "A Minor", shape: [null, 0, 2, 2, 1, 0] },
  { name: "E Minor", shape: [0, 2, 2, 0, 0, 0] },
  { name: "D Minor", shape: [null, null, 0, 2, 3, 1] },

  // 7
  { name: "A7", shape: [null, 0, 2, 0, 2, 0] },
  { name: "E7", shape: [0, 2, 0, 1, 0, 0] },
  { name: "D7", shape: [null, null, 0, 2, 1, 2] },

  // 5
  { name: "A5", shape: [null, 0, 2, 2, null, null] },
  { name: "G5", shape: [3, 5, 5, null, null, null] },
  { name: "E5", shape: [0, 2, 2, null, null, null] },

  // Maj7
  { name: "Cmaj7", shape: [null, 3, 2, 0, 0, 0] },
  { name: "Gmaj7", shape: [3, 2, 0, 0, 0, 2] },

  // m7
  { name: "Am7", shape: [null, 0, 2, 0, 1, 0] },
  { name: "Em7", shape: [0, 2, 0, 0, 0, 0] },
];

export default function ChordSlideshow() {
  const [currentChord, setCurrentChord] = useState(
    allChords[Math.floor(Math.random() * allChords.length)]
  );

  const [intervalTime, setIntervalTime] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChord =
        allChords[Math.floor(Math.random() * allChords.length)];
      setCurrentChord(randomChord);
    }, intervalTime * 1000);

    return () => clearInterval(interval);
  }, [intervalTime]); // ✅ No warning now

  const activePositions = fretboardNotes.filter((pos) =>
    currentChord.shape.some((fret, index) => {
      if (fret === null) return false;
      const stringNumber = index + 1;
      return pos.string === stringNumber && pos.fret === fret + 1;
    })
  );

  return (
    <div
      className="fretboard-page"
      style={{ paddingTop: "4.5rem", textAlign: "center" }}
    >
      <h2>Chord Slideshow Trainer</h2>
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
        <p>Switch Speed: {intervalTime} seconds</p>
        <input
          type="range"
          min="1"
          max="10"
          value={intervalTime}
          onChange={(e) => setIntervalTime(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
