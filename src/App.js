import './App.css'
import Navbar from './components/Navbar'
import Aboutprops from './components/Aboutprops'
import Textarea from './components/Textarea'
import Bgchanger from './components/Bgchanger'
import React,{useState} from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'

// import Pro from "./components/Aboutprops"; --> About Props

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Aboutprops />} />
        <Route path="/textarea" element={<Textarea />} />
        <Route path="/Bg" element={<Bgchanger />} />
      </Routes>    
    </>
  )
}
export default App
