import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'
import Navbar from './components/navbar'
import Footer from './components/footer'
function App() {
  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>

    <Footer />
    </>
  )
}

export default App
