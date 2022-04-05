import React, { useEffect, useState } from "react";
import SinglePhoto from "./components/SinglePhoto";
import Button from "./components/Button";
import { IoFilter } from "react-icons/io5";
import { BsFillFilterSquareFill } from "react-icons/bs";
import "./App.css";
import "./css/Modal.css";

import Malta1 from "../src/img/malta/1.jpg";
import Malta2 from "../src/img/malta/2.jpeg";
import Malta3 from "../src/img/malta/3.jpeg";
import Malta4 from "../src/img/malta/4.jpeg";
import Malta5 from "../src/img/malta/5.jpeg";
import Malta6 from "../src/img/malta/6.jpeg";
import Malta7 from "../src/img/malta/7.jpeg";
import Malta8 from "../src/img/malta/8.jpeg";
import Malta9 from "../src/img/malta/9.jpeg";
import Malta10 from "../src/img/malta/10.jpeg";

import Navbar from "./components/Navbar";

function App() {
   const [posts, setPosts] = useState([
      {
         id: 1,
         imgSrc: Malta2,
         title: "Havana, 1973",
         type: "malta",
         country: "Malta",
      },
      {
         id: 2,
         imgSrc: Malta1,
         title: "Street Art",
         type: "malta",
         country: "Malta",
      },
      {
         id: 3,
         imgSrc: Malta3,
         title: "Stairs to Heaven",
         type: "malta",
      },
      {
         id: 4,
         imgSrc: Malta4,
         title: "Do Not Stop!",
         type: "malta",
      },
      {
         id: 5,
         imgSrc: Malta5,
         title: "Blue",
         type: "malta",
      },
      {
         id: 6,
         imgSrc: Malta6,
         title: "Where Are You?",
         type: "malta",
      },
      {
         id: 7,
         imgSrc: Malta7,
         title: "Warmth",
         type: "malta",
      },
      {
         id: 8,
         imgSrc: Malta8,
         title: "King's Courtyard",
         type: "malta",
      },
      {
         id: 9,
         imgSrc: Malta9,
         title: "Left Behind",
         type: "malta",
      },
      {
         id: 10,
         imgSrc: Malta10,
         title: "Dog Days",
         type: "malta",
      },
   ]);

   // const [currentId, setCurrentId] = useState();

   // const [counter, setCounter] = useState();

   /* States */
   const [modal, setModal] = useState(false);
   const [isFilterOn, setIsFilterOn] = useState(false);
   const [selectecImg, setselectedImg] = useState("");
   const [selectedTitle, setselectedTitle] = useState("");
   const [selectedCountry, setSelectedCountry] = useState("");
   const [selectedCategory, setselectedCategory] = useState("all");

   const [postsPerPage, setPostsPerPage] = useState(7);

   const numberOfPostsToDisplay = posts.slice(0, postsPerPage);

   /* Functions */

   const selectedPhoto = (imgSrc, id, title, type, country) => {
      document.body.style.overflowY = "hidden";
      setselectedImg(imgSrc);
      setModal((modal) => true);
      setselectedTitle((selectedTitle) => title);
      setSelectedCountry((selectedCountry) => country);
   };

   const switchModalOff = () => {
      document.body.style.overflowY = "auto";
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
   console.log(numberOfPostsToDisplay);

   const movePage = (img) => {
      console.log(img);
   };

   return (
      <div className='App'>
         <Navbar />
         <div className={modal ? "modal open fade-in-fwd" : "modal"}>
            <div className='x' onClick={switchModalOff}>
               X
            </div>

            <div className='info'>
               <h1>{selectedTitle}</h1>
               <div className='arrow' onClick={() => movePage(selectecImg)}>
                  +++
               </div>
               {/* <h2>Country: {selectedCountry}</h2> */}
            </div>
            <div className='photo'>
               <img src={selectecImg} alt='' />
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
            <Button
               title={"Art"}
               onClick={setCategory}
               category={"art"}
               className={"btn"}
            />
            <Button
               title={"Photo"}
               onClick={setCategory}
               category={"photo"}
               className={"btn"}
            />
            <Button
               title={"B&W"}
               onClick={setCategory}
               category={"black&white"}
               className={"btn"}
            />
            <Button
               title={"Drawing"}
               onClick={setCategory}
               category={"black&white"}
               className={"btn"}
            />
            <Button
               title={"Malta"}
               onClick={setCategory}
               category={"malta"}
               className={"btn"}
            />
         </div>
         <SinglePhoto
            posts={numberOfPostsToDisplay}
            selectedPhoto={selectedPhoto}
            selectedCategory={selectedCategory}
         />{" "}
         <div className='show-more-posts'>
            <Button
               className={"btn show"}
               title={"Show More"}
               onClick={showMorePosts}
            />
         </div>
         <footer>COPYCOPY</footer>
      </div>
   );
}

export default App;
