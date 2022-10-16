import React from 'react';
import Navbar from "./Navbar";
import "./global.css";
import "./button.css"
import { NavLink } from 'react-router-dom';
const Homepage = () => {
  return (
    <>
    <Navbar />
    <section className="hero-section">
    <h1>Save the child</h1>
    <h2>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</h2>
   
   <button class="button">
   <span>
    <NavLink to="/productpage">Go to pp</NavLink>
    </span>
    </button>
     
  </section>
  </>
  )
}

export default Homepage