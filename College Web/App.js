import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Facilities from "./Facilities";
import Department from "./Department";
import Contact from "./Contact"; 
  
export default function App() {   
  return ( 
    <BrowserRouter> 
        <Routes> 
          <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} /> 
          <Route path="About" element={<About />} /> 
 		      <Route path="Facilities" element={<Facilities />} /> 
 	 	      <Route path="Department" element={<Department/>} /> 
 	 	      <Route path="Contact" element={<Contact />} /> 
          </Route> 
        </Routes> 
    </BrowserRouter> 
  ); 
} 

export default App;
