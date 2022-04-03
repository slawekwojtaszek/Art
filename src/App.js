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

function App() {
   const [posts, setPosts] = useState([
      {
         id: 1,
         imgSrc: Art6,
         title: "fota1",
         type: "art",
      },
      {
         id: 2,
         imgSrc: Art3,
         title: "fota2",
         type: "photo",
      },
      {
         id: 3,
         imgSrc: Art3,
         title: "fota3",
         type: "photo",
      },
      {
         id: 4,
         imgSrc: Art3,
         title: "fota4",
         type: "art",
      },
      {
         id: 5,
         imgSrc: Art4,
         title: "fota5",
         type: "photo",
      },
      {
         id: 6,
         imgSrc: Art5,
         title: "Elo",
         type: "photo",
      },

      {
         id: 7,
         imgSrc: Art5,
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
      // {
      //    id: 11,
      //    imgSrc: Art9,
      //    title: "Elo",
      //    type: "photo",
      // },
      // {
      //    id: 12,
      //    imgSrc: Art8,
      //    title: "Elo",
      //    type: "photo",
      // },
      // {
      //    id: 13,
      //    imgSrc: Art9,
      //    title: "Elo",
      //    type: "photo",
      // },
      // {
      //    id: 14,
      //    imgSrc: Art7,
      //    title: "Elo",
      //    type: "photo",
      // },
      // {
      //    id: 15,
      //    imgSrc: Art8,
      //    title: "Elo",
      //    type: "photo",
      // },
      // {
      //    id: 16,
      //    imgSrc: Art9,
      //    title: "Elo",
      //    type: "photo",
      // },
      // {
      //    id: 17,
      //    imgSrc: Art8,
      //    title: "Elo",
      //    type: "photo",
      // },
      // {
      //    id: 18,
      //    imgSrc: Art9,
      //    title: "Elo",
      //    type: "photo",
      // },
      // {
      //    id: 19,
      //    imgSrc: Art8,
      //    title: "Elo",
      //    type: "photo",
      // },
      // {
      //    id: 20,
      //    imgSrc: Art9,
      //    title: "Elo",
      //    type: "photo",
      // },
      // {
      //    id: 21,
      //    imgSrc: Art9,
      //    title: "Elo",
      //    type: "photo",
      // },
      // {
      //    id: 22,
      //    imgSrc: Art6,
      //    title: "Elo",
      //    type: "photo",
      // },
      // {
      //    id: 23,
      //    imgSrc: Art9,
      //    title: "Elo",
      //    type: "photo",
      // },
      // {
      //    id: 24,
      //    imgSrc: Art9,
      //    title: "Elo",
      //    type: "photo",
      // },
   ]);

   /* States */
   const [modal, setModal] = useState(false);
   const [selectecImg, setselectedImg] = useState("");
   const [selectedTitle, setselectedTitle] = useState("");
   const [selectedType, setSelectedType] = useState();
   const [postsPerPage, setPostsPerPage] = useState(5);

   const [isPhoto, setisPhoto] = useState("photo");
   const [isArt, setisArt] = useState("art");

   const numberOfPostsToDisplay = posts.slice(0, postsPerPage);

   /* Functions */

   const clickedPhoto = (imgSrc, id, title, type) => {
      document.body.style.overflow = "hidden";

      setselectedImg(imgSrc);
      setModal((modal) => true);
      setselectedTitle((selectedTitle) => title);
      setSelectedType((selectedType) => type);
   };

   const switchModalOff = () => {
      document.body.style.overflow = "auto";
      setModal((modal) => false);
   };

   const setArt = () => {
      setisArt((isArt) => "art");
      setisPhoto((isPhoto) => null);
   };

   const setPhoto = () => {
      setisArt((isArt) => null);
      setisPhoto((isPhoto) => "photo");
   };

   const showMorePosts = () => {
      setPostsPerPage((postsPerPage) => postsPerPage + 5);
   };

   return (
      <div className='App'>
         <div className={modal ? "modal open fade-in-fwd" : "modal"}>
            <div className='x' onClick={switchModalOff}>
               X
            </div>
            <div className='photo'>
               <h1>{selectedTitle}</h1>
               <h1>{selectedType}</h1>
               <div className='inside'>
                  <img src={selectecImg} alt='' />
               </div>
            </div>
         </div>
         <div className='button-container'>
            <div className='btn' onClick={setArt}>
               Art
            </div>
            <div className='btn' onClick={setPhoto}>
               Photo
            </div>
         </div>

         <SinglePhoto
            posts={numberOfPostsToDisplay}
            clickedPhoto={clickedPhoto}
            type={selectedType}
            isPhoto={isPhoto}
            isArt={isArt}
         />
         {/* <SingleArt posts={numberOfPostsToDisplay} clickedPhoto={clickedPhoto} /> */}

         <div className='show-more-posts'>
            <div className='btn' onClick={showMorePosts}>
               Show More
            </div>
         </div>

         <footer>COPYCOPY</footer>
      </div>
   );
}

export default App;
