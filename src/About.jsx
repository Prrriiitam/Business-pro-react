import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";

 const About=()=>{
    const web="https://st2.depositphotos.com/3591429/10464/i/950/depositphotos_104648666-stock-photo-group-of-people-brainstorming-on.jpg";
   return(
    <>
        <Common
        name="Welcome To About Page"
        imgsrc={web}
        visit="/contact"
        btname="contact Now"
         />
    </>
   );
 }

export default About;