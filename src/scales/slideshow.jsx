import React, { useState, useEffect } from "react";
import fretboardImg from "../fretboard/images/fretboard.png";
import "../fretboard/memorize.css";
import { fretboardNotes } from "../fretboard/fretboardData";
import { allScales } from "./scaleData";

export default function ScaleSlideshow() {
  const [currentScale, setCurrentScale] = useState(
    allScales[Math.floor(Math.random() * allScales.length)]
  );

  const [intervalTime, setIntervalTime] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomScale =
        allScales[Math.floor(Math.random() * allScales.length)];
      setCurrentScale(randomScale);
    }, intervalTime * 1000);

    return () => clearInterval(interval);
  }, [intervalTime]);

  const activePositions = fretboardNotes.filter((pos) =>
    currentScale.positions.some(
      (sp) => pos.string === sp.string && pos.fret === sp.fret + 1
    )
  );

  return (
    <div
      className="fretboard-page"
      style={{ paddingTop: "4.5rem", textAlign: "center" }}
    >
      <h2>Scale Slideshow Trainer</h2>
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
