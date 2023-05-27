import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";

 const Home=()=>{
    const web="https://rb.gy/0x42h";

 return(
    <>
    <Common
        name="Grow Your Business With"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
         />
    </>
 )
 }

export default Home;