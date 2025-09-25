import React from 'react'
import Home from './components/home/Home'
import Navbar from './components/nav/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Project from './components/project/Project';
import Footer from './components/footer/Footer';
import Blog from './components/blog/blog';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={< Contact/>} />
        <Route path="/about" element={< About/>} />
        <Route path="/project" element={< Project/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App