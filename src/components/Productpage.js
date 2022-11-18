import React, { useState,useEffect } from "react";
import "./cart.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Fade from 'react-reveal/Fade';


import sanityClient from "../client.js";

const uniqueList = ["All",
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  
];

console.log(uniqueList);
const Productpage = () => {


  const [postData, setPost] = useState(null);
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  // useEffect(() => {
  //   sanityClient
  //       .fetch(`*[_type == "post"]{
  //           title,
  //           category,
  //           description,
  //           mainImage{
  //               asset->{
  //                   _id,
  //                   url
  //                   },
  //                   },
  //                   }`)
  //                   .then((data) => setPost(data))
  //                   .catch(console.error);
  //                   }, []);
                 
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
    
      <Topbar />
      <div className="parent-div">
     
       <div className="sidebar-div">
       <Fade left>
        <Sidebar filterItem={filterItem} menuList={menuList}/>
        </Fade>
       </div>
       <div style={{width: "100%", paddingRight:"3%"}}>
       <Fade bottom >
       <MenuCard menuData={menuData} post={postData} />  
       </Fade>
       </div>
      </div>
    </>
  );
};

export default Productpage;