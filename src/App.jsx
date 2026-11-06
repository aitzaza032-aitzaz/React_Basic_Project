import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

import MyNavbar from './component/Navbar.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Home from './component/Home.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { increment ,decrement ,DEC , incrementByAmount } from './counterSlice.js'

function App() {
    
  // Aitzaz 


   const count =useSelector((state)=> state.counter.value);
   const dispatch =useDispatch();
 
  return (
    <>
      <div>

    <h1> Normal Practice {count} </h1>
      <MyNavbar />
    <button onClick={()=>dispatch(increment())}> ++</button>
    <button onClick={()=>dispatch(decrement())}> --</button>
    <button onClick={()=>dispatch(incrementByAmount(5))}> +5</button>
        <button onClick={()=>dispatch(DEC(-50))}> -50</button>
  
     <BrowserRouter>
      <nav>
        {/* Navigation links using Link */}

        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link> |
        <Link to="/contact"> Contact us</Link> |        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>


      </div>
    
    </>
  )
}

export default App
