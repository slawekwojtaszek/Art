import React from "react";
import "../App.css";

function SingleImage({ posts, clickedPhoto, isPhoto, isArt, selectedType }) {
   return (
      <div className='main-container art'>
         {posts.map((item, id) => (
            <div
               className='img-container'
               onClick={() =>
                  clickedPhoto(item.imgSrc, item.id, item.title, item.type)
               }
               key={id}>
               {isArt === item.type ? (
                  <>
                     <h1>Art</h1>
                     <img src={item.imgSrc} alt='' />
                  </>
               ) : null}
               {isPhoto === item.type ? (
                  <>
                     <h1>Photo</h1>
                     <img src={item.imgSrc} alt='' />
                  </>
               ) : null}
            </div>
         ))}
      </div>
   );
}

export default SingleImage;
