// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import StickyActions from './components/common/StickyActions';
import KarkidakaModal from './components/common/KarkidakaModal';
import Home from './components/pages/Home';
import About from './components/pages/About';
import OurService from './components/pages/OurService';
import Media from './components/pages/Media';
import Contact from './components/pages/Contact';
import BookNow from './components/pages/BookNow';
import ConsultNow from './components/pages/ConsultNow';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <KarkidakaModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<OurService />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/consult-now" element={<ConsultNow />} />
      </Routes>
      <StickyActions />
      <Footer />
    </BrowserRouter>
  );
}

export default App;