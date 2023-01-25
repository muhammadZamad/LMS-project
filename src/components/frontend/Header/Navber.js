import React from 'react';
import logohead from "../../../images/logo.png";
import '../../../App.scss';
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  ContactsOutlined,
  LoginOutlined,
  InfoCircleOutlined,
  BookOutlined,
} from '@ant-design/icons';
export default function Navber() {
  return (
    <header style={{marginTop: "-40px"}}>
      <nav className="navbar navbar-expand-lg bg-transparent ">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">
      <img className='logo' src={ logohead } alt="logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active d-flex align-items-center"  style={{fontSize: "20px"}}><HomeOutlined /> Home</Link>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link active ms-5"  style={{fontSize: "20px"}}><InfoCircleOutlined /> About</a>
        </li>
        <li className="nav-item">
          <Link to="/blogs" className="nav-link active ms-5"  style={{fontSize: "20px"}}><BookOutlined /> Library</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link active ms-5"  style={{fontSize: "20px"}}><ContactsOutlined /> Contact Us</Link>
        </li>
      
       
      </ul>
      <div className="d-flex me-5">
        <Link to="/Auth/login" className='btn btn-outline-info rounded-5' style={{fontSize: "20px"}}><LoginOutlined /> Login</Link>
      </div>
    </div>
  </div>
</nav>
    </header>
  )
}
