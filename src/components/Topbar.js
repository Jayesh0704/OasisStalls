import React, { useState } from "react";


import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Slide from 'react-reveal/Slide';


import classes from "./topbar.css";

const Topbar = () => {

    return (
        <Slide down>
            <nav>
                <Navbar collapseOnSelect expand="lg" variant="light" className={`${classes.navBarTop} navBarTop`}>
                    <Navbar.Brand className={`${classes.brand} brand`}>
                        <NavLink to={"/"} exact={true}>
                            <div className={`${classes.logo} logo`} style={{ display: "flex", alignItems: "center" }}>
                            
                                <div><img className={`${classes.nssLogo} nssLogo`} src="/images/512.png" /></div>
                                <div style={{ display: "flex", alignItems: "center"}}>
                                    <div className={`${classes.nss} nss`}>
                                        NSS
                                    </div>
                                    <div style={{display: "flex", flexDirection: "column", marginLeft: "0.2rem"}}>
                                        <div className={`${classes.bits} bits`}>
                                            BITS
                                        </div>
                                        <div className={`${classes.bits} bits`}>
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
                        <Nav className={`${classes.links_top} links_top`}  style={{marginRight:"3%"}}>
                            <NavLink to={"/"} exact={true} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Home</NavLink>
                            <NavLink to={"/Productpage"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Products</NavLink>
                            <NavLink to={"/contactForm"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Contact Us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </nav>
        </Slide>
    );
}

export default Topbar;