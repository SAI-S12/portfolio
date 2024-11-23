import React from 'react'
import "./App.css"
import Navbar from './Components/sidebar/Navbar'
import {Routes, Route } from 'react-router-dom'
import Main from './Components/main/Main'
import Service from './Components/Services/Service'
import Skills from './Components/Skills/Skills'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import { useState } from 'react'

const App = () => {
  const[isOn,setOn]=useState(true)
  return (
    <div className='hero'>
       <Navbar setOn={setOn} isOn={isOn}/>
       <Routes>
        <Route path='/'  element={<Main setOn={setOn} isOn={isOn} />}/>
        <Route path="/services" element={<Service setOn={setOn} isOn={isOn}/>} />
        <Route path='/skills' element={<Skills setOn={setOn} isOn={isOn}/>}/>
        <Route path='/project' element={<Project setOn={setOn} isOn={isOn}/>}/>
        <Route path="/contact" element={<Contact setOn={setOn} isOn={isOn}/>}/>
       </Routes>
    </div>
  )
}

export default App