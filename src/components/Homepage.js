import React from 'react';
import Topbar from "./Topbar";
import "./global.css";
import "./button.css"
import { NavLink } from 'react-router-dom';
const Homepage = () => {
  return (
    <div className='home-background'>
    <Topbar />
    <section className="hero-section">
    <h1>Save the child</h1>
    <h2  >lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</h2>
   
   <button class="button">
   <span>
    <NavLink to="/productpage">Explore Products</NavLink>
    </span>
    </button>
     
  </section>
  </div>
  )
}

export default Homepage