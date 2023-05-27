import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const User=()=>{
    const {fname,lname}=useParams();
    const location=useLocation();
    const history = useNavigate();
 return(        <>
            <h1>This is User {fname} {lname}'s Page</h1>
            <p>You are Currently in {location.pathname}</p>
            {location.pathname===`/user/pritam/sarangi` ? 
            (<button onClick={()=>history(-1)}>Click Me</button>) : null}
        </>
    );
}
export default User;