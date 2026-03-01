// src/scales/scaleData.js
// Each scale is an array of { string, fret } positions.
// string: 1 = high E, 6 = low E
// fret: 0 = open string, 1 = 1st fret, 2 = 2nd fret, etc.
// These use the same offset convention as chords: pos.fret === fret + 1

// ── Major Scales (open position) ──────────────────────────

export const majorScales = [
  {
    name: "C Major",
    positions: [
      // Low E (string 6)
      { string: 6, fret: 0 }, // E
      { string: 6, fret: 1 }, // F
      { string: 6, fret: 3 }, // G
      // A string (string 5)
      { string: 5, fret: 0 }, // A
      { string: 5, fret: 2 }, // B
      { string: 5, fret: 3 }, // C
      // D string (string 4)
      { string: 4, fret: 0 }, // D
      { string: 4, fret: 2 }, // E
      { string: 4, fret: 3 }, // F
      // G string (string 3)
      { string: 3, fret: 0 }, // G
      { string: 3, fret: 2 }, // A
      // B string (string 2)
      { string: 2, fret: 0 }, // B
      { string: 2, fret: 1 }, // C
      { string: 2, fret: 3 }, // D
      // High E (string 1)
      { string: 1, fret: 0 }, // E
      { string: 1, fret: 1 }, // F
      { string: 1, fret: 3 }, // G
    ],
  },
  {
    name: "D Major",
    positions: [
      // A string (string 5)
      { string: 5, fret: 0 }, // A
      { string: 5, fret: 2 }, // B
      // D string (string 4)
      { string: 4, fret: 0 }, // D
      { string: 4, fret: 2 }, // E
      { string: 4, fret: 4 }, // F#
      // G string (string 3)
      { string: 3, fret: 0 }, // G
      { string: 3, fret: 2 }, // A
      { string: 3, fret: 4 }, // B
      // B string (string 2)
      { string: 2, fret: 0 }, // B
      { string: 2, fret: 2 }, // C#
      { string: 2, fret: 3 }, // D
      // High E (string 1)
      { string: 1, fret: 0 }, // E
      { string: 1, fret: 2 }, // F#
      { string: 1, fret: 3 }, // G
    ],
  },
  {
    name: "E Major",
    positions: [
      // Low E (string 6)
      { string: 6, fret: 0 }, // E
      { string: 6, fret: 2 }, // F#
      { string: 6, fret: 4 }, // G#
      // A string (string 5)
      { string: 5, fret: 0 }, // A
      { string: 5, fret: 2 }, // B
      { string: 5, fret: 4 }, // C#
      // D string (string 4)
      { string: 4, fret: 0 }, // D (passing)
      { string: 4, fret: 1 }, // D# / Eb
      { string: 4, fret: 2 }, // E
      { string: 4, fret: 4 }, // F#
      // G string (string 3)
      { string: 3, fret: 1 }, // G#
      { string: 3, fret: 2 }, // A
      { string: 3, fret: 4 }, // B
      // B string (string 2)
      { string: 2, fret: 0 }, // B
      { string: 2, fret: 2 }, // C#
      { string: 2, fret: 4 }, // D#
      // High E (string 1)
      { string: 1, fret: 0 }, // E
      { string: 1, fret: 2 }, // F#
      { string: 1, fret: 4 }, // G#
    ],
  },
  {
    name: "G Major",
    positions: [
      // Low E (string 6)
      { string: 6, fret: 0 }, // E
      { string: 6, fret: 1 }, // F
      { string: 6, fret: 3 }, // G
      // A string (string 5)
      { string: 5, fret: 0 }, // A
      { string: 5, fret: 2 }, // B
      { string: 5, fret: 3 }, // C
      // D string (string 4)
      { string: 4, fret: 0 }, // D
      { string: 4, fret: 2 }, // E
      { string: 4, fret: 4 }, // F#
      // G string (string 3)
      { string: 3, fret: 0 }, // G
      { string: 3, fret: 2 }, // A
      { string: 3, fret: 4 }, // B
      // B string (string 2)
      { string: 2, fret: 0 }, // B
      { string: 2, fret: 1 }, // C
      { string: 2, fret: 3 }, // D
      // High E (string 1)
      { string: 1, fret: 0 }, // E
      { string: 1, fret: 1 }, // F#
      { string: 1, fret: 3 }, // G
    ],
  },
  {
    name: "A Major",
    positions: [
      // A string (string 5)
      { string: 5, fret: 0 }, // A
      { string: 5, fret: 2 }, // B
      { string: 5, fret: 4 }, // C#
      // D string (string 4)
      { string: 4, fret: 0 }, // D
      { string: 4, fret: 2 }, // E
      { string: 4, fret: 4 }, // F#
      // G string (string 3)
      { string: 3, fret: 1 }, // G#
      { string: 3, fret: 2 }, // A
      { string: 3, fret: 4 }, // B
      // B string (string 2)
      { string: 2, fret: 0 }, // B (passing)
      { string: 2, fret: 2 }, // C#
      { string: 2, fret: 3 }, // D
      // High E (string 1)
      { string: 1, fret: 0 }, // E
      { string: 1, fret: 2 }, // F#
      { string: 1, fret: 4 }, // G#
    ],
  },
];

// ── Minor Scales (natural minor, open position) ──────────

export const minorScales = [
  {
    name: "A Minor",
    positions: [
      // Low E (string 6)
      { string: 6, fret: 0 }, // E
      { string: 6, fret: 1 }, // F
      { string: 6, fret: 3 }, // G
      // A string (string 5)
      { string: 5, fret: 0 }, // A
      { string: 5, fret: 2 }, // B
      { string: 5, fret: 3 }, // C
      // D string (string 4)
      { string: 4, fret: 0 }, // D
      { string: 4, fret: 2 }, // E
      { string: 4, fret: 3 }, // F
      // G string (string 3)
      { string: 3, fret: 0 }, // G
      { string: 3, fret: 2 }, // A
      // B string (string 2)
      { string: 2, fret: 0 }, // B
      { string: 2, fret: 1 }, // C
      { string: 2, fret: 3 }, // D
      // High E (string 1)
      { string: 1, fret: 0 }, // E
      { string: 1, fret: 1 }, // F
      { string: 1, fret: 3 }, // G
    ],
  },
  {
    name: "E Minor",
    positions: [
      // Low E (string 6)
      { string: 6, fret: 0 }, // E
      { string: 6, fret: 1 }, // F#... wait, E minor: E F# G A B C D
      { string: 6, fret: 2 }, // F#
      { string: 6, fret: 3 }, // G
      // A string (string 5)
      { string: 5, fret: 0 }, // A
      { string: 5, fret: 2 }, // B
      { string: 5, fret: 3 }, // C
      // D string (string 4)
      { string: 4, fret: 0 }, // D
      { string: 4, fret: 2 }, // E
      { string: 4, fret: 3 }, // F#... wait
      // G string (string 3)
      { string: 3, fret: 0 }, // G
      { string: 3, fret: 2 }, // A
      { string: 3, fret: 4 }, // B
      // B string (string 2)
      { string: 2, fret: 0 }, // B
      { string: 2, fret: 1 }, // C
      { string: 2, fret: 3 }, // D
      // High E (string 1)
      { string: 1, fret: 0 }, // E
      { string: 1, fret: 2 }, // F#
      { string: 1, fret: 3 }, // G
    ],
  },
  {
    name: "D Minor",
    positions: [
      // A string (string 5)
      { string: 5, fret: 0 }, // A
      { string: 5, fret: 1 }, // Bb
      { string: 5, fret: 3 }, // C
      // D string (string 4)
      { string: 4, fret: 0 }, // D
      { string: 4, fret: 2 }, // E
      { string: 4, fret: 3 }, // F
      // G string (string 3)
      { string: 3, fret: 0 }, // G
      { string: 3, fret: 2 }, // A
      { string: 3, fret: 3 }, // Bb
      // B string (string 2)
      { string: 2, fret: 1 }, // C
      { string: 2, fret: 3 }, // D
      // High E (string 1)
      { string: 1, fret: 0 }, // E
      { string: 1, fret: 1 }, // F
      { string: 1, fret: 3 }, // G
    ],
  },
];

// ── Dominant 7th / Mixolydian Scales (open position) ─────

export const dominant7Scales = [
  {
    name: "A Mixolydian",
    // A B C# D E F# G (like A major but with b7 = G)
    positions: [
      // A string (string 5)
      { string: 5, fret: 0 }, // A
      { string: 5, fret: 2 }, // B
      { string: 5, fret: 4 }, // C#
      // D string (string 4)
      { string: 4, fret: 0 }, // D
      { string: 4, fret: 2 }, // E
      { string: 4, fret: 4 }, // F#
      // G string (string 3)
      { string: 3, fret: 0 }, // G
      { string: 3, fret: 2 }, // A
      { string: 3, fret: 4 }, // B
      // B string (string 2)
      { string: 2, fret: 0 }, // B (passing)
      { string: 2, fret: 2 }, // C#
      { string: 2, fret: 3 }, // D
      // High E (string 1)
      { string: 1, fret: 0 }, // E
      { string: 1, fret: 2 }, // F#
      { string: 1, fret: 3 }, // G
    ],
  },
  {
    name: "E Mixolydian",
    // E F# G# A B C# D (like E major but with b7 = D)
    positions: [
      // Low E (string 6)
      { string: 6, fret: 0 }, // E
      { string: 6, fret: 2 }, // F#
      { string: 6, fret: 4 }, // G#
      // A string (string 5)
      { string: 5, fret: 0 }, // A
      { string: 5, fret: 2 }, // B
      { string: 5, fret: 4 }, // C#
      // D string (string 4)
      { string: 4, fret: 0 }, // D
      { string: 4, fret: 2 }, // E
      { string: 4, fret: 4 }, // F#
      // G string (string 3)
      { string: 3, fret: 1 }, // G#
      { string: 3, fret: 2 }, // A
      { string: 3, fret: 4 }, // B
      // B string (string 2)
      { string: 2, fret: 0 }, // B
      { string: 2, fret: 2 }, // C#
      { string: 2, fret: 3 }, // D
      // High E (string 1)
      { string: 1, fret: 0 }, // E
      { string: 1, fret: 2 }, // F#
      { string: 1, fret: 4 }, // G#
    ],
  },
  {
    name: "D Mixolydian",
    // D E F# G A B C (like D major but with b7 = C)
    positions: [
      // A string (string 5)
      { string: 5, fret: 0 }, // A
      { string: 5, fret: 2 }, // B
      { string: 5, fret: 3 }, // C
      // D string (string 4)
      { string: 4, fret: 0 }, // D
      { string: 4, fret: 2 }, // E
      { string: 4, fret: 4 }, // F#
      // G string (string 3)
      { string: 3, fret: 0 }, // G
      { string: 3, fret: 2 }, // A
      { string: 3, fret: 4 }, // B
      // B string (string 2)
      { string: 2, fret: 0 }, // B
      { string: 2, fret: 1 }, // C
      { string: 2, fret: 3 }, // D
      // High E (string 1)
      { string: 1, fret: 0 }, // E
      { string: 1, fret: 2 }, // F#
      { string: 1, fret: 3 }, // G
    ],
  },
];

// All scales combined (for slideshow)
export const allScales = [
  ...majorScales,
  ...minorScales,
  ...dominant7Scales,
];
