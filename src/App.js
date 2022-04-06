import React, { useEffect, useState } from "react";
import SinglePhoto from "./components/SinglePhoto";
import Button from "./components/Button";
import { IoFilter } from "react-icons/io5";
import { BsFilter } from "react-icons/bs";
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

import Japan1 from "../src/img/japan/1.jpg";
import Japan2 from "../src/img/japan/2.jpg";
import Japan3 from "../src/img/japan/3.jpg";
import Japan4 from "../src/img/japan/4.jpg";
import Japan5 from "../src/img/japan/5.jpg";
import Japan6 from "../src/img/japan/6.jpg";
import Japan7 from "../src/img/japan/7.jpg";

import Art1 from "../src/img/art/1.jpg";
import Art2 from "../src/img/art/2.jpg";
import Art3 from "../src/img/art/3.jpg";
import Art4 from "../src/img/art/4.jpg";
import Art5 from "../src/img/art/5.jpg";
import Art6 from "../src/img/art/6.jpg";
import Art7 from "../src/img/art/7.jpg";
import Art8 from "../src/img/art/8.jpg";
import Art9 from "../src/img/art/9.jpg";

import Drawing1 from "../src/img/drawing/1.jpg";
import Drawing2 from "../src/img/drawing/2.jpg";
import Drawing4 from "../src/img/drawing/4.jpg";

import Wall1 from "../src/img/walls/1.jpg";
import Wall2 from "../src/img/walls/2.jpg";
import Wall3 from "../src/img/walls/3.jpg";
import Wall4 from "../src/img/walls/4.jpg";
import Wall5 from "../src/img/walls/5.jpg";
import Wall6 from "../src/img/walls/6.jpg";

import Analog1 from "../src/img/analog/1.jpg";
import Analog2 from "../src/img/analog/2.jpg";
import Analog3 from "../src/img/analog/3.jpg";
import Analog4 from "../src/img/analog/4.jpg";
import Analog5 from "../src/img/analog/5.jpg";
import Analog7 from "../src/img/analog/7.jpg";
import Analog8 from "../src/img/analog/8.jpg";
import Analog9 from "../src/img/analog/9.jpg";
import Analog10 from "../src/img/analog/10.jpg";
import Analog11 from "../src/img/analog/11.jpg";
import Analog14 from "../src/img/analog/14.jpg";

import Navbar from "./components/Navbar";

function App() {
   const [posts, setPosts] = useState([
      {
         id: 1,
         imgSrc: Malta2,
         title: "Havana, 1973",
         type: "digital",
      },
      {
         id: 39,
         imgSrc: Japan1,
         title: "Night Walk",
         type: "digital",
      },
      {
         id: 25,
         imgSrc: Analog8,
         title: "Barcelona, Spain",
         type: "analog",
      },
      {
         id: 7,
         imgSrc: Malta7,
         title: "Warmth",
         type: "digital",
      },
      {
         id: 11,
         imgSrc: Drawing1,
         title: "Tree of Pain",
         type: "drawing",
      },
      {
         id: 18,
         imgSrc: Analog1,
         title: "Malik",
         type: "analog",
      },
      {
         id: 46,
         imgSrc: Art2,
         title: "I Want You",
         type: "art",
      },

      {
         id: 2,
         imgSrc: Malta1,
         title: "Street Art",
         type: "digital",
      },
      {
         id: 36,
         imgSrc: Wall4,
         title: "Check out my chimney!",
         type: "walls",
      },
      {
         id: 4,
         imgSrc: Malta4,
         title: "Do Not Stop!",
         type: "digital",
      },
      {
         id: 44,
         imgSrc: Japan7,
         title: "You know, the crosswalk",
         type: "digital",
      },
      {
         id: 24,
         imgSrc: Analog7,
         title: "Peter",
         type: "analog",
      },

      {
         id: 3,
         imgSrc: Malta3,
         title: "Stairs to Heaven",
         type: "digital",
      },
      {
         id: 21,
         imgSrc: Analog4,
         title: "100.000.000 Kilometers",
         type: "analog",
      },

      {
         id: 5,
         imgSrc: Malta5,
         title: "Blue",
         type: "digital",
      },
      {
         id: 6,
         imgSrc: Malta6,
         title: "Where Are You?",
         type: "digital",
      },
      {
         id: 40,
         imgSrc: Japan2,
         title: "Asahi HQ",
         type: "digital",
      },
      {
         id: 8,
         imgSrc: Malta8,
         title: "King's Courtyard",
         type: "digital",
      },
      {
         id: 34,
         imgSrc: Wall2,
         title: "Give me a little piece of your mind",
         type: "walls",
      },
      {
         id: 9,
         imgSrc: Malta9,
         title: "Left Behind",
         type: "digital",
      },
      {
         id: 10,
         imgSrc: Malta10,
         title: "Dog Days",
         type: "digital",
      },

      // Drawing

      {
         id: 12,
         imgSrc: Drawing2,
         title: "True Lies?",
         type: "drawing",
      },

      {
         id: 14,
         imgSrc: Drawing4,
         title: "Keoss",
         type: "drawing",
      },

      // Analog

      {
         id: 19,
         imgSrc: Analog2,
         title: "Family",
         type: "analog",
      },
      {
         id: 20,
         imgSrc: Analog3,
         title: "London",
         type: "analog",
      },

      {
         id: 22,
         imgSrc: Analog5,
         title: "Cerbera, France",
         type: "analog",
      },

      {
         id: 26,
         imgSrc: Analog9,
         title: "Addiction",
         type: "analog",
      },
      {
         id: 27,
         imgSrc: Analog10,
         title: "Beauty",
         type: "analog",
      },
      {
         id: 28,
         imgSrc: Analog11,
         title: "Kidness",
         type: "analog",
      },
      {
         id: 31,
         imgSrc: Analog14,
         title: "Mysterious",
         type: "analog",
      },

      // Wall

      {
         id: 33,
         imgSrc: Wall1,
         title: "Surrender",
         type: "walls",
      },

      {
         id: 35,
         imgSrc: Wall3,
         title: "Diseased",
         type: "walls",
      },

      {
         id: 37,
         imgSrc: Wall5,
         title: "White light, alcohol",
         type: "walls",
      },
      {
         id: 38,
         imgSrc: Wall6,
         title: "Doors of Perception",
         type: "walls",
      },

      // Japan

      {
         id: 41,
         imgSrc: Japan3,
         title: "Silence",
         type: "digital",
      },
      {
         id: 42,
         imgSrc: Japan4,
         title: "I love Asahi!",
         type: "digital",
      },
      {
         id: 43,
         imgSrc: Japan5,
         title: "Double Selfie",
         type: "digital",
      },
      {
         id: 44,
         imgSrc: Japan6,
         title: "CCTV in Operation",
         type: "digital",
      },

      // Art

      {
         id: 45,
         imgSrc: Art1,
         title: "Future",
         type: "art",
      },

      {
         id: 47,
         imgSrc: Art3,
         title: "War",
         type: "art",
      },
      {
         id: 48,
         imgSrc: Art4,
         title: "Rose",
         type: "art",
      },
      {
         id: 49,
         imgSrc: Art5,
         title: "InVitro",
         type: "art",
      },
      {
         id: 50,
         imgSrc: Art6,
         title: "Scraps",
         type: "art",
      },
      {
         id: 51,
         imgSrc: Art7,
         title: "Bad Trip",
         type: "art",
      },
      {
         id: 52,
         imgSrc: Art8,
         title: "Close Eyes",
         type: "art",
      },
      {
         id: 53,
         imgSrc: Art9,
         title: "Where where you in 92'?",
         type: "art",
      },
   ]);

   /* States */
   const [modal, setModal] = useState(false);
   const [isFilterOn, setIsFilterOn] = useState(false);
   const [selectecImg, setselectedImg] = useState("");
   const [selectedTitle, setselectedTitle] = useState("");
   const [selectedCountry, setSelectedCountry] = useState("");
   const [selectedCategory, setselectedCategory] = useState("all");

   const [postsPerPage, setPostsPerPage] = useState(20);

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
   };

   const setCategory = (type) => {
      setselectedCategory((selectedCategory) => type);
   };

   const showMorePosts = () => {
      setPostsPerPage((postsPerPage) => postsPerPage + 5);
   };

   // const movePage = (img) => {
   //    console.log(img);
   // };

   return (
      <div className='App'>
         <Navbar />
         <div className={modal ? "modal open fade-in-fwd" : "modal"}>
            <div className='x' onClick={switchModalOff}>
               X
            </div>

            <div className='info'>
               <h1>{selectedTitle}</h1>

               {/* <h2>Country: {selectedCountry}</h2> */}
            </div>
            <div className='photo'>
               <img src={selectecImg} alt='' />
            </div>
         </div>
         <div className='filter' onClick={switchFilterOnOff}>
            <div className='icon'>
               {" "}
               <BsFilter />
            </div>
            <div className='text'>Filter</div>
         </div>
         <div
            className={
               isFilterOn
                  ? "button-container on swing-in-top-fwd "
                  : "button-container"
            }>
            <Button
               title={"Analog"}
               onClick={setCategory}
               category={"analog"}
               className={"btn"}
            />
            <Button
               title={"Digital"}
               onClick={setCategory}
               category={"digital"}
               className={"btn"}
            />
            <Button
               title={"Art"}
               onClick={setCategory}
               category={"art"}
               className={"btn"}
            />

            <Button
               title={"Drawing"}
               onClick={setCategory}
               category={"drawing"}
               className={"btn"}
            />

            <Button
               title={"Walls"}
               onClick={setCategory}
               category={"walls"}
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
         <footer>
            <h1>Voytashek </h1>
            <h2>All Rights Reserved &copy; 2022</h2>
         </footer>
      </div>
   );
}

export default App;
