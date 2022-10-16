import React, { useState } from "react";
import "./cart.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";



const Productpage = () => {
  const [menuData, setMenuData] = useState(Menu);
 


  return (
    <>
      <Navbar />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Productpage;