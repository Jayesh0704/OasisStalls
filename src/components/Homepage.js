import React from 'react';
import Topbar from "./Topbar";
import "./global.css";
import "./button.css"
import Background from './Background';
import { NavLink } from 'react-router-dom';
const Homepage = () => {
  return (
    
    <div className='home-background'>
 
    <Topbar />
    <section className="hero-section">
    <h1>Save the child</h1>
    <h2 >Browse our collection of products made by kids  <br ></br> from various orphanages and help bring a smile to their faces</h2>
   
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