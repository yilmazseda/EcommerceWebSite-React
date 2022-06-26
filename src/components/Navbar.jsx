import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const html=document.querySelector("html");
  html.addEventListener("click",()=>setNavState(false))
  return (
    <nav>
      <div className="container py-3 mx-3">
        <div className="brand">
          <span>ehya</span>
          <div className="span dot">.</div>
        </div>
        <div className="links-container" onClick={(e)=>e.stopPropagation()}>
          <div className="toggle">
            {navState?(<MdClose onClick={()=>setNavState(false)}/>):
            <GiHamburgerMenu onClick={(e)=>
              { 
                e.stopPropagation()
                setNavState(true)}
            
           }/>}

          </div>
          <div className={`links ${navState ?"responsive-toggle":""}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Landings</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
