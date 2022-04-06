import React from "react";
import "../App.css";

function SingleImage({ posts, selectedPhoto, selectedCategory }) {
   return (
      <div className='main-container art'>
         {posts.map((item, id) => (
            <>
               {selectedCategory === "all" ? (
                  <div
                     className='img-container'
                     onClick={() =>
                        selectedPhoto(
                           item.imgSrc,
                           item.id,
                           item.title,
                           item.type,
                           item.country
                        )
                     }>
                     <img src={item.imgSrc} alt='' />
                     <h1>{item.title}</h1>
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
                           item.type,
                           item.country
                        )
                     }>
                     <img src={item.imgSrc} alt='' />
                     <h1>{item.title}</h1>
                  </div>
               ) : null}
            </>
         ))}
      </div>
   );
}

export default SingleImage;
