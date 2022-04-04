import React from "react";
import "../css/Button.css";

function Button({ title, onClick, category }) {
   return (
      <>
         {" "}
         <div className='btn' onClick={() => onClick(category)}>
            {title}
         </div>
      </>
   );
}

export default Button;
