import './App.css'
import Navbar from './components/Navbar'
import Aboutprops from './components/Aboutprops'
import Textarea from './components/Textarea'
import Bgchanger from './components/Bgchanger'
// import React,{useState} from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'

// import Pro from "./components/Aboutprops"; --> About Props

function App() {
  return (
    <>
    <Navbar  b="Write-Notes" c="Change-Background"/>
      <Routes>
        <Route path="/" element={<Aboutprops />} />
        <Route path="Notes" element={<Textarea />} />
        <Route path="Change-Background" element={<Bgchanger />} />
      </Routes>    
    </>
  )
}
export default App
