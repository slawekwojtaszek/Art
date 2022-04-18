import React from "react";
import "../css/Navbar.css";

function Navbar() {
   return (
      <nav>
         <div className='top-bar'>"Art is never finished, only abandoned."</div>
         <div className='logo'>
            <a href='/'>
               <h1>Voytashek</h1>
            </a>
            <h2 className='text-shadow-pop-top'>{"Photo & Art"}</h2>
         </div>
      </nav>
   );
}

export default Navbar;
