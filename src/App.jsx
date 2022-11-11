import { useState, useRef, useEffect } from "react";
import "./App.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Project from "./Project";
import Projects from "./Projects";

import Typewriter from "typewriter-effect";

function App() {
   const [isFinished, setIsFinished] = useState(false);
   const [isTop, setIsTop] = useState(false);
   const ref = useRef(null);

   //keep track of refs topoffset
   useEffect(() => {
      const handleScroll = () => {
         const top = ref.current.getBoundingClientRect().top;
         if (top <= 0) {
            setIsTop(true);
         } else {
            setIsTop(false);
         }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <div className="main">
         <div className="hero">
            <h1 className="fade-in-top">
               {isFinished ? (
                  "Hello, I    am Filip"
               ) : (
                  <Typewriter
                     onInit={(typewriter) => {
                        typewriter
                           .changeDelay(80)
                           .typeString("Hello, I am Fili")
                           .callFunction(() => {
                              setIsFinished(true);
                           })
                           .start();
                     }}
                  />
               )}
            </h1>
         </div>
         <div ref={ref} className={`icon-container ${isTop ? "addbg" : ""}`}>
            <FaGithub size={30} className="icon" />
            <FaLinkedin size={32} className="icon" />
            <FaEnvelope size={34} className="icon" />
         </div>
         <h2>My Projects</h2>
         <Project projects={Projects} project={"MatSam"} />
         <Project projects={Projects} project={"MatSam"} />
         <Project projects={Projects} project={"MatSam"} />
      </div>
   );
}

export default App;
