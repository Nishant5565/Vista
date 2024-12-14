import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { Login, Signup } from './Components/Auth/Auth'; 
import { Toaster } from "@/components/ui/sonner"

function App() {

  return (

    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login role = "Customer" />} />
        <Route path="/signup" element={<Signup role = "Customer" />} />
      </Routes>
    </Router>
  )
}

export default App
