import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./pages/home";
import Chords from "./pages/chords";
import ChordMemorize from "./chords/memorize";
import Scales from "./pages/scales";
import Fretboard from "./pages/fretboard";
import FretboardGames from "./fretboard/games";
import MajorChords from "./chords/major";
import MinorChords from "./chords/minor";
import SevenChords from "./chords/seven";
import FiveChords from "./chords/five";
import Maj7Chords from "./chords/maj7";
import Minor7Chords from "./chords/m7";
import ChordSlideshow from "./chords/slideshow";
import ScaleMemorize from "./scales/memorize";
import MajorScales from "./scales/major";
import MinorScales from "./scales/minor";
import Dominant7Scales from "./scales/dominant7";
import ScaleSlideshow from "./scales/slideshow";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Chords Section */}
        <Route path="/chords" element={<Chords />} />
        <Route path="/chords/memorize" element={<ChordMemorize />} />
        <Route path="/chords/memorize/major" element={<MajorChords />} />
        <Route path="/chords/memorize/minor" element={<MinorChords />} />
        <Route path="/chords/memorize/7" element={<SevenChords />} />
        <Route path="/chords/memorize/5" element={<FiveChords />} />
        <Route path="/chords/memorize/maj7" element={<Maj7Chords />} />
        <Route path="/chords/memorize/m7" element={<Minor7Chords />} />
        <Route path="/chords/slideshow" element={<ChordSlideshow />} />








        {/* Scales Section */}
        <Route path="/scales" element={<Scales />} />
        <Route path="/scales/memorize" element={<ScaleMemorize />} />
        <Route path="/scales/memorize/major" element={<MajorScales />} />
        <Route path="/scales/memorize/minor" element={<MinorScales />} />
        <Route path="/scales/memorize/dominant7" element={<Dominant7Scales />} />
        <Route path="/scales/slideshow" element={<ScaleSlideshow />} />

        {/* Fretboard Tools */}
        <Route path="/fretboard" element={<Fretboard />} />
        <Route path="/fretboard/games" element={<FretboardGames />} />
      </Routes>
    </BrowserRouter>
  );
}
