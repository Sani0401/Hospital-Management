import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element= {<Login/>} />
        <Route path='/Signup' element= {<Signup/>} />
        <Route path='/home' element= {<Home/>} />
  
      </Routes>
    </Router>

    </>
  )
}

export default App