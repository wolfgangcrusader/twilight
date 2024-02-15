import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; 
import Characters from './components/Characters';
import Quotes from './components/TwilightQuoteGenerator';
import PhotoGallery from './components/PhotoGallery';
import Movies from './components/Movies';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/photos" element={<PhotoGallery />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
