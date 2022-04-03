import React from "react";
import "../App.css";

function SingleImage({ posts, getImg }) {
   return (
      <div className='photo'>
         <div className='main-container art'>
            <h1>Photo</h1>
            {posts.map((item, id) => (
               <div
                  className='img-container'
                  onClick={() => getImg(item.imgSrc, item.id, item.title)}
                  key={item.id}>
                  {item.type === "photo" ? (
                     <img src={item.imgSrc} alt='' />
                  ) : null}
               </div>
            ))}
         </div>
      </div>
   );
}

export default SingleImage;
