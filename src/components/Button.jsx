import React from "react";
import "../css/Button.css";

function Button({ title, onClick, category, className }) {
   return (
      <>
         {" "}
         <div className={className} onClick={() => onClick(category)}>
            {title}
         </div>
      </>
   );
}

export default Button;
