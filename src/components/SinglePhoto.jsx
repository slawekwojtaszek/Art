import React from "react";
import "../App.css";

function SingleImage({ posts, selectedPhoto, selectedCategory }) {
   return (
      <div className='main-container art'>
         {posts.map((item, id) => (
            <div className='main' key={id}>
               {selectedCategory === "all" ? (
                  <div
                     className='img-container'
                     onClick={() =>
                        selectedPhoto(
                           item.imgSrc,
                           item.id,
                           item.title,
                           item.type
                        )
                     }>
                     <h1>{item.type}</h1>
                     <img src={item.imgSrc} alt='' />
                  </div>
               ) : null}

               {item.type === selectedCategory ? (
                  <div
                     className='img-container'
                     onClick={() =>
                        selectedPhoto(
                           item.imgSrc,
                           item.id,
                           item.title,
                           item.type
                        )
                     }>
                     <h1>{item.type}</h1>
                     <img src={item.imgSrc} alt='' />
                  </div>
               ) : null}
            </div>
         ))}
      </div>
   );
}

export default SingleImage;
