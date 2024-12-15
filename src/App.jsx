import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { Login, Signup } from './Components/Auth/Auth'; 
import { Toaster } from "@/components/ui/sonner"
import Layout from './pages/Layout'
import Packages from './Components/Packages/Packages'
import Dashboard from './Admin/Dashboard/Dashboard'
import SpecificPackage from './Components/Packages/SpecificPackage'

function App() {

  return (

    <Router>
      <Toaster />
      <Routes>
        <Route element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login role = "Customer" />} />
        <Route path="/employer/login" element={<Login role = "Employer" />} />
        <Route path="/employer/signup" element={<Signup role = "Employer" />} />
        <Route path="/signup" element={<Signup role = "Customer" />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/package/:id" element={<SpecificPackage />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
