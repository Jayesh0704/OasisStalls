import React, { useState } from "react";
import "./cart.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);
const Productpage = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    }
    );

    setMenuData(updatedList);
  };
  return (
    <>
    
      <Navbar />
      <div className="parent-div">
       <div className="sidebar-div">
      <Sidebar filterItem={filterItem} menuList={menuList}/>
      </div>
      <MenuCard menuData={menuData} />  
      </div>
    </>
  );
};

export default Productpage;