import React from "react";
import "./index.css";
const Contact=()=>{
return(
    <>
        <div className="my-5">
            <h1 className="text-center"> Contact US</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form>
                <div className="mb-3">
               <label for="exampleInputName" className="form-label"> Enter Name</label>
               <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
               </div>
               <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Email address</label>
               <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
               <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
               </div>
              <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="form-floating">
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              <label for="floatingTextarea">Enter Your Messages</label>
              </div>
             <div className="mb-3 form-check">
             <input type="checkbox" className="form-check-input" id="exampleCheck1" />
             <label className="form-check-label" for="exampleCheck1">Check me out</label>
             </div>
             <button type="submit" className="btn btn-primary">Submit</button>
</form>
                </div>
            </div>
        </div>
    </>
)
}
export default Contact;