import React from 'react'
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Themes from './components/Themes';
import Blog from './pages/blog/Blog';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Themes />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
