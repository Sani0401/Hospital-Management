import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/signUp' element={<Signup/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
   </Router>
   </>
  )
}

export default App