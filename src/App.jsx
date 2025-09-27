import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './components/home/Home';
import Navbar from './components/nav/Nav';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Project from './components/project/Project';
import Footer from './components/footer/Footer';
import Blog from './components/blog/Blog';

// ✅ ScrollToTop Component (inside App.jsx itself)
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      {/* ✅ This works because it's inside Router */}
      <ScrollToTop />  
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
