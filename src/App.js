import React, { useEffect, useState } from "react";
import SinglePhoto from "./components/SinglePhoto";
import Button from "./components/Button";
import { IoFilter } from "react-icons/io5";
import { BsFillFilterSquareFill } from "react-icons/bs";
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
import Navbar from "./components/Navbar";

function App() {
   const [posts, setPosts] = useState([
      {
         id: 1,
         imgSrc: Art6,
         title: "fota1",
         type: "black&white",
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
         imgSrc: Art6,
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
         imgSrc: Art6,
         title: "Elo",
         type: "art",
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
         imgSrc: Art6,
         title: "Elo",
         type: "art",
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
         imgSrc: Art6,
         title: "Elo",
         type: "art",
      },
   ]);

   /* States */
   const [modal, setModal] = useState(false);
   const [isFilterOn, setIsFilterOn] = useState(false);
   const [selectecImg, setselectedImg] = useState("");
   const [selectedTitle, setselectedTitle] = useState("");
   const [selectedCategory, setselectedCategory] = useState("all");

   const [postsPerPage, setPostsPerPage] = useState(10);

   const numberOfPostsToDisplay = posts.slice(0, postsPerPage);

   /* Functions */

   const selectedPhoto = (imgSrc, id, title, type) => {
      document.body.style.overflow = "hidden";

      setselectedImg(imgSrc);
      setModal((modal) => true);
      setselectedTitle((selectedTitle) => title);
   };

   const switchModalOff = () => {
      document.body.style.overflow = "auto";
      setModal((modal) => false);
   };

   const switchFilterOnOff = () => {
      setIsFilterOn((isFilterOn) => !isFilterOn);
      console.log(isFilterOn);
   };

   const setCategory = (type) => {
      setselectedCategory((selectedCategory) => type);
      console.log(selectedCategory);
   };

   const showMorePosts = () => {
      setPostsPerPage((postsPerPage) => postsPerPage + 5);
   };

   return (
      <div className='App'>
         <Navbar />
         <div className={modal ? "modal open fade-in-fwd" : "modal"}>
            <div className='x' onClick={switchModalOff}>
               X
            </div>
            <div className='photo'>
               <h1>{selectedTitle}</h1>
               <h1>{selectedCategory}</h1>
               <div className='inside'>
                  <img src={selectecImg} alt='' />
               </div>
            </div>
         </div>
         <div className='icon'>
            <BsFillFilterSquareFill onClick={switchFilterOnOff} />
         </div>
         <div
            className={
               isFilterOn
                  ? "button-container on swing-in-top-fwd "
                  : "button-container"
            }>
            <Button title={"Art"} onClick={setCategory} category={"art"} />
            <Button title={"Photo"} onClick={setCategory} category={"photo"} />
            <Button
               title={"B&W"}
               onClick={setCategory}
               category={"black&white"}
            />
            <Button
               title={"Drawing"}
               onClick={setCategory}
               category={"black&white"}
            />
            <Button
               title={"Drawing"}
               onClick={setCategory}
               category={"black&white"}
            />
         </div>
         <SinglePhoto
            posts={numberOfPostsToDisplay}
            selectedPhoto={selectedPhoto}
            selectedCategory={selectedCategory}
         />{" "}
         <div className='show-more-posts'>
            <div className='btnX' onClick={showMorePosts}>
               Show More
            </div>
         </div>
         <footer>COPYCOPY</footer>
      </div>
   );
}

export default App;
