import React, { useEffect, useState } from "react";
import SinglePhoto from "./components/SinglePhoto";
import "./App.css";
import Art1 from "../src/img/art1.jpg";
import Art2 from "../src/img/art2.jpg";
import Art6 from "../src/img/art6.jpg";
import Art3 from "../src/img/art3.jpg";
import Art7 from "../src/img/art7.jpg";
import Art4 from "../src/img/art4.jpg";
import Art5 from "../src/img/art5.jpg";

import Art8 from "../src/img/art8.jpg";
import Art9 from "../src/img/art9.jpg";
import SingleArt from "./components/SingleArt";

function App() {
   const [posts, setPosts] = useState([
      {
         id: 1,
         imgSrc: Art1,
         title: "Elo",
         type: "photo",
      },
      {
         id: 6,
         imgSrc: Art2,
         title: "elo",
         type: "photo",
      },
      {
         id: 3,
         imgSrc: Art3,
         title: "Elo",
         type: "photo",
      },
      {
         id: 2,
         imgSrc: Art6,
         title: "Prezes",
         type: "art",
      },
      {
         id: 4,
         imgSrc: Art4,
         title: "Elo",
         type: "photo",
      },
      {
         id: 5,
         imgSrc: Art5,
         title: "Elo",
         type: "photo",
      },

      {
         id: 7,
         imgSrc: Art7,
         title: "Elo",
         type: "photo",
      },
      {
         id: 8,
         imgSrc: Art8,
         title: "Elo",
         type: "photo",
      },
      {
         id: 9,
         imgSrc: Art9,
         title: "Elo",
         type: "photo",
      },
      {
         id: 10,
         imgSrc: Art8,
         title: "Elo",
         type: "photo",
      },
      {
         id: 11,
         imgSrc: Art9,
         title: "Elo",
         type: "photo",
      },
      {
         id: 12,
         imgSrc: Art8,
         title: "Elo",
         type: "photo",
      },
      {
         id: 13,
         imgSrc: Art9,
         title: "Elo",
         type: "photo",
      },
      {
         id: 14,
         imgSrc: Art7,
         title: "Elo",
         type: "photo",
      },
      {
         id: 15,
         imgSrc: Art8,
         title: "Elo",
         type: "photo",
      },
      {
         id: 16,
         imgSrc: Art9,
         title: "Elo",
         type: "photo",
      },
      {
         id: 17,
         imgSrc: Art8,
         title: "Elo",
         type: "photo",
      },
      {
         id: 18,
         imgSrc: Art9,
         title: "Elo",
         type: "photo",
      },
      {
         id: 19,
         imgSrc: Art8,
         title: "Elo",
         type: "photo",
      },
      {
         id: 20,
         imgSrc: Art9,
         title: "Elo",
         type: "photo",
      },
      {
         id: 21,
         imgSrc: Art9,
         title: "Elo",
         type: "photo",
      },
      {
         id: 22,
         imgSrc: Art6,
         title: "Elo",
         type: "photo",
      },
      {
         id: 23,
         imgSrc: Art9,
         title: "Elo",
         type: "photo",
      },
      {
         id: 24,
         imgSrc: Art9,
         title: "Elo",
         type: "photo",
      },
   ]);

   const [modal, setModal] = useState(false);
   const [selectecImg, setselectedImg] = useState("");
   const [selectedId, setselectedId] = useState("");
   const [selectedTitle, setselectedTitle] = useState("");

   // const [counter, setCounter] = useState(5);

   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage, setPostsPerPage] = useState(7);

   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;

   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

   const [isPhoto, setisPhoto] = useState(true);
   const [isArt, setisArt] = useState(true);

   const getImg = (imgSrc, id, title, type) => {
      document.body.style.overflow = "hidden";

      setselectedImg(imgSrc);
      setModal((modal) => true);
      setselectedId((selectedId) => id);
      setselectedTitle((selectedTitle) => title);
   };

   const swtichOff = () => {
      document.body.style.overflow = "auto";
      setModal((modal) => false);
   };

   const setType = (type) => {
      if (isArt && !isPhoto) {
         setisArt(true);
         setisPhoto(false);
      }
   };

   const showMore = () => {
      setPostsPerPage((postsPerPage) => postsPerPage + 5);
      console.log(postsPerPage);
   };

   return (
      <div className='App'>
         <div className={modal ? "modal open fade-in-fwd" : "modal"}>
            <div className='x' onClick={swtichOff}>
               X
            </div>
            <div className='photo'>
               <h1>{selectedTitle}</h1>
               <div className='inside'>
                  <img src={selectecImg} alt='' />
               </div>
            </div>
         </div>
         <button onClick={setType}>Art</button>
         <button onClick={setType}>Photo</button>
         <button onClick={showMore}>Add More Posts</button>

         <SinglePhoto posts={currentPosts} getImg={getImg} />
         <SingleArt posts={currentPosts} getImg={getImg} />
      </div>
   );
}

export default App;
