import React from "react";

function SingleArt({ posts, getImg }) {
   return (
      <div className='art'>
         <div className='main-container flip-in-hor-bottom'>
            <h1>Art</h1>

            {posts.map((item, id) => (
               <div
                  className='img-container'
                  onClick={() => getImg(item.imgSrc, item.id, item.title)}
                  key={item.id}>
                  {item.type === "art" ? (
                     <img src={item.imgSrc} alt='' />
                  ) : null}
               </div>
            ))}
         </div>
      </div>
   );
}

export default SingleArt;
