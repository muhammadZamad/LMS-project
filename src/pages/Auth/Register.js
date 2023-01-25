import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase';
import { Link } from 'react-router-dom';
import "../../scss/login.css"
const initialState = { email: "", password: "" }

export default function Register() {

   // ---------------
   const inputs = document.querySelectorAll(".input");

   function focusFunc() {
     let parent = this.parentNode;
     parent.classList.add("focus");
   }
   
   function blurFunc() {
     let parent = this.parentNode;
     if (this.value == "") {
       parent.classList.remove("focus");
     }
   }
   
   inputs.forEach((input) => {
     input.addEventListener("focus", focusFunc);
     input.addEventListener("blur", blurFunc);
   });
   
   
   var a=localStorage.getItem("abc");
   
   if(a=="save password"){
       window.location.href="home.html";
   }
   
     // ---------------

    const [state, setState] = useState(initialState)

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value})
    }


    const handlesubmits = (e) => {
        e.preventDefault();

     console.log(state)

     const { email, password } = state

     createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User Registration successful")
    console.log(userCredential)
    console.log(user)
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    console.error(error)
    // ..
  });
        // if (password.length < 6) {
        //     alert("Minmum password lenght should be 6")
        //     return;
        // }
        // else {
        //     alert("You are Login")
        // }
    } 

  return (
    <>
    <div className=''>
<div className='area d-flex align-items-center'>
<ul className="circles">
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
<div className="container signIn">
<div className="form sign-in-container">
<form onSubmit={handlesubmits}>
<h1 style={{color: "#10CB52"}}>Sign Up to Account</h1>
<div className="social-container">
<Link to=""><i className="fab fa-facebook-f"></i></Link>
<Link to=""><i className="fab fa-google-plus-g"></i></Link>
<Link to=""><i className="fab fa-linkedin-in"></i></Link>
</div>
<p className="p" style={{marginTop: "-15px", color: "grey"}}>Or use your email account</p>
<div className="input-container">
<input type="email" name="email" className="input" id="email" onChange={handleChange}/>
<label htmlFor="">Email</label>
<span>email</span>
</div>
<div className="input-container">
<input type="password" name="password" className="input" id="pass" onChange={handleChange} />
<label htmlFor="">Password</label>
<span>Password</span>
</div>


<button type="submit" style={{backgroundColor: "#10CB52", border: "none", marginTop: "20px"}} >Sign Up</button>
</form>
</div>
<div className="overlay-container">
<div className="overlay">
<div className="overlay-panel overlay-right">
<span className="circle one"></span>
<span className="circle two"></span>
<h1 >Hello, Friend!</h1>
<p >Fill Up Personal Information and <br /> start jounery with us.</p>
<Link to="../login"><button style={{border: "1px solid white"}} className="signup_btn"  >Sign In</button></Link>
</div>
</div>
</div>

</div>
</div>
</div>
</>
    // <div className='py-5'>
    //     <div className='container py-5'>
    //         <div className='row'>
    //             <div className='col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
    //                 <div className='card p-2 p-md-3 p-lg -4'>
    //                     <h2 className='text-center text-dark mb-4'>Registration Form</h2>
    //                     <form onSubmit={handlesubmits} > 
    //                     <div className='row mb-3'>
    //                     <div className='col'> 
    //                     <input type="email" placeholder='Email...' name='email' className='form-control' onChange={handleChange} />
    //                     </div>
    //                     </div>
    //                     <div className='row mb-3'>
    //                     <div className='col'> 
    //                     <input type="password" placeholder='Password....' name='password' className='form-control' onChange={handleChange} />
    //                     </div>
    //                     </div>
    //                     <div className='row mb-3'>
    //                     <div className='col text-center'> 
    //                     <button className='btn btn-success w-100 mb-3'>Register</button>
    //                    <Link to="../login"><button className='btn btn-success w-100'>Sign In</button></Link> 
    //                     </div>
                       
    //                     </div>
                            
    //                     </form>
                      

    //                 </div>
    //             </div>
    //         </div>
    //     </div>
      
    // </div>
  )
}
