import React, { useState } from "react";
import fretboardImg from "./images/fretboard.png";
import "./memorize.css";
import { fretboardNotes, noteNames } from "../fretboard/fretboardData";


export default function FretboardMemorize() {
  const [selectedNote, setSelectedNote] = useState(null);


  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };


  // Filter all positions of the currently selected note
  const activeNotePositions = selectedNote
    ? fretboardNotes.filter(n => n.note === selectedNote)
    : [];


  return (
    <div className="fretboard-page" style={{ paddingTop: "4.5rem", textAlign: "center" }}>
      <h2>Fretboard Memorization</h2>
      <p>Click a note below to see its positions on the fretboard</p>


      {/* Fretboard container */}
      <div
        className="fretboard-container"
        style={{ position: "relative", display: "inline-block" }}
      >
        <img src={fretboardImg} alt="Guitar Fretboard" className="fretboard-img" />


        {/* Dots for active note */}
        {activeNotePositions.map((pos, index) => (
          <div
            key={index}
            className="note-dot"
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


      {/* Note buttons */}
      <div className="note-buttons" style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem" }}>
        {noteNames.map((note) => (
          <button
            key={note}
            onClick={() => handleNoteClick(note)}
            className="note-btn"
            style={{
              padding: "0.5rem 0.8rem",
              border: "none",
              borderRadius: "0.4rem",
              backgroundColor: "#334155",
              color: "#f1f5f9",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {note}
          </button>
        ))}
      </div>
    </div>
  );
}
