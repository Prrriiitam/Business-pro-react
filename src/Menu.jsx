import React from "react";
import { NavLink } from "react-router-dom";
const Menu=()=>{
return(
    <>
   <div className="menu_style">
   <NavLink exact  to='/'>About Us</NavLink>
   <NavLink exact  to='/service'>Services</NavLink>
   <NavLink exact  to='/user/search'>Search</NavLink>
   <NavLink exact  to='/user/:fname/:lname'>User</NavLink>
    <NavLink exact  to='/contact'>Contact Us</NavLink>
    
   </div>
      
    </>
);

}
export default Menu;