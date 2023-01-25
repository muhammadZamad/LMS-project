import React, { useState, useEffect  } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, sendEmailVerification  } from "firebase/auth";
import { auth } from '../../config/firebase';
import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import "../../scss/login.css"
const initialState = { email: "", password: "" }

export default function Login() {
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

    const [ user, setUser ] = useState({})
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
            //   const uid = user.uid;
              console.log(user)
              setUser(user)
              // ...
            } else {
              // User is signed out
              // ...
            }
          });

    }, [])

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value})
    }


    const handlesubmits = (e) => {
        e.preventDefault();

     console.log(state)

     const { email, password } = state

     signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User LoggedIn successful")
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

    const handleLogout = () =>{
      signOut(auth)
      .then(()=>{
        console.log("user logged out")
        setUser({})
      })
      .catch((err)=>{
          console.error(err)
      })
    }
    // const authUserVerification = () =>{
    //   sendEmailVerification(auth.currentUser)
    //   .then(() => {
    //     console.log("Email sent!")
    //     // ...
    //   }).catch((error) => {
    //     // An error occurred
    //     console.error(error)
    //     // ...
    //   });

    // }
    // const updateUserProfile = () =>{
    //   updateProfile(auth.currentUser, {
    //     displayName: "Muhammad Zamad",
    //     photoURL: "https://lh3.googleusercontent.com/ogw/AOh-ky1RcjSFbtNLiXWcVb-1lZ2HCR1vn72lpTTMSly6=s32-c-mo"
    //   }).then(() => {
    //     console.log("Profile updated!")
    //     // ...
    //   }).catch((error) => {
    //     // An error occurred
    //     console.error(error)
    //     // ...
    //   });
    // }

  return (
    <div className=' body'>
        <div className='container'>
          {user.email
          ? 
          <Navigate replace to="../../dashboard" />
          // <div className="row">
          //   <div className="col">
          //   <div className='col text-center'> 
          //   <img src={ user.photoURL } alt="profile pick" className='img-fluid' />
          //   <h2 className="text-dark text-center">User Email: {user.email}</h2>
          //           <h2 className="text-dark text-center">User U-Id: {user.uid}</h2>
          //           <h2 className="text-dark text-center">User Display Name: {user.displayName}</h2>
          //               <button className='btn btn-success w-25' onClick={handleLogout}>Logout</button><br />
          //               <button className='btn btn-info w-25 my-3' onClick={authUserVerification}>Verification</button><br />
          //               <button className='btn btn-danger w-25' onClick={updateUserProfile}>update profile</button>
          //               </div>
          //   </div>
          // </div>
           :
            <>
            <div className='py-5'>
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
    <h1 style={{color: "#10CB52"}}>Sign in to Account</h1>
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
    <div style={{justifyContent: "center"}}>
      <input style={{marginLeft: "23px"}} type="checkbox" value="lsRememberMe" id="rememberMe"  /> 
      <label
        style={{fontSize: "12px"}} htmlFor="rememberMe" >Remember me</label>
      <Link style={{fontSize: "12px", marginLeft: "60px"}} to="">Forgot password?</Link>
    </div>

    <button type="submit" style={{backgroundColor: "#10CB52", border: "none", marginTop: "20px"}} >Sign In</button>
  </form>
</div>
<div className="overlay-container">
  <div className="overlay">
    <div className="overlay-panel overlay-right">
      <span className="circle one"></span>
      <span className="circle two"></span>
      <h1 >Hello, Friend!</h1>
      <p >Fill Up Personal Information and <br /> start jounery with us.</p>
      <Link to="../register"><button style={{border: "1px solid white"}} className="signup_btn"  >Sign Up</button></Link>
    </div>
  </div>
</div>

</div>
</div>
</div>
</>
}
        </div>
      
    </div>
  )
}
