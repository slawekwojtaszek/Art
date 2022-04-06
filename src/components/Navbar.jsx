import React from "react";
import "../css/Navbar.css";

function Navbar() {
   return (
      <nav>
         <div className='top-bar'>"Art is never finished, only abandoned."</div>
         <div className='logo'>
            <h1>Voytashek</h1>
            <div className='elo'>
               <h2 className='text-shadow-pop-top'>{"Photo & Art"}</h2>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
