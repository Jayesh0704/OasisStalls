import React, { useState,useEffect } from "react";


import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Slide from 'react-reveal/Slide';


import classes from "./topbar.css";


const Topbar = () => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    return (
        <Slide down>
            <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
                <Navbar collapseOnSelect expand="lg" variant="light" className="navBarTop">
                    <Navbar.Brand className="brand">
                        <NavLink to={"/"} exact={true}>
                            <div className="logo" style={{ display: "flex", alignItems: "center" }}>
                            
                                <div><img className="nssLogo" src="/images/512.png" /></div>
                                <div style={{ display: "flex", alignItems: "center"}}>
                                    <div className="nss">
                                        NSS
                                    </div>
                                    <div style={{display: "flex", flexDirection: "column", marginLeft: "0.2rem"}}>
                                        <div className="bits">
                                            BITS
                                        </div>
                                        <div className="bits">
                                            PILANI
                                        </div>
                                    </div>
                                </div>                
                            </div>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent:"space-between"}}>
                        <Nav className="mr-auto">
                        
                        </Nav>
                        <Nav className="links_top"  style={{marginRight:"3%"}}>
                            <NavLink to={"/"} exact={true} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Home</NavLink>
                            <NavLink to={"/Productpage"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Products</NavLink>
                            <NavLink to={"/contactForm"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Contact Us</NavLink>
                            <NavLink to={"/Developer"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Meet the developer</NavLink>
                            </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </nav>
        </Slide>
    );
}

export default Topbar;