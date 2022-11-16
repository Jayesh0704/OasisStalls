import React from "react";

import './Sidebar.css';


const Sidebar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="menu-item">
        <div className="btn-group"> 
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
           }
          )
        }
        </div>
      </nav>
      <select className="dropdown" onChange={(e) => {
        filterItem(e.target.value);
      }}>
       {menuList.map((curElem) => {
        return (
          <option
            className="btn-group__item"
            value={curElem}
            >
            {curElem}
          </option>
        );
        }
        )
      }
           </select>
    </>
  );
};

export default Sidebar;