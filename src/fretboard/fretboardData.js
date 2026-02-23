// src/fretboard/fretboardData.js

export const noteNames = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
export const stringTuning = ["E","A","D","G","B","E"]; // 6 → 1

// Y positions for strings (pixels) from Low E → High E
export const stringYs = [252, 219, 185, 150, 117, 83];

// X positions for frets 0 → 15 (0 = open string)
export const fretXs = [36, 60, 97, 135, 173, 210, 250, 286, 325, 362, 400, 440, 475, 513, 552, 590];

export const numFrets = 15;

// Optional offset to align visual fretboard with musical notes
const fretOffset = 1;

// Generate all notes on the fretboard with pixel positions
let allNotes = [];

for (let stringIndex = 0; stringIndex < 6; stringIndex++) {
  const openNote = stringTuning[stringIndex];
  const openNoteIndex = noteNames.indexOf(openNote);

  for (let fret = 0; fret <= numFrets; fret++) {
    // Musical note index with visual offset
    const noteIndex = (openNoteIndex + fret - fretOffset + 12) % 12;
    const note = noteNames[noteIndex];

    const x = fretXs[fret];
    const y = stringYs[stringIndex];

    allNotes.push({
      note,
      string: stringIndex + 1, // 1 = high E, 6 = low E
      fret,
      x,
      y,
    });
  }
}

// Remove all sharp notes at fret 0
export const fretboardNotes = allNotes.filter(
  n => !(n.fret === 0 && n.note.includes("#"))
);
