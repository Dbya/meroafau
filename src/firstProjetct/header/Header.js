import React from 'react';
import { Navbar,Container } from 'react-bootstrap';
import './header.css';


const Header = () => {
  return (
   <div className="mainHeader ">
   <nav>
   <div className="logo">NeutroLine</div>
    <ul className="navList">
     <li><a href="">Features <i className="fa fa-angle-down"></i></a>
     <div className="subClass">
     <ul>
     <li>Web Development</li>
     <li>Mobile app </li>
     <li>ios </li>
     </ul>
     </div>
     </li>
     <li><a href="">Company <i className="fa fa-angle-down"></i></a> 
     <div className="subClass">
     <ul>
     <li> About us</li>
     <li>Family</li>
     <li>Carrer</li>
     </ul>
     </div>
     </li>
     <li><a href="">Carrer</a> </li>
     <li><a href="">About</a> </li>
     <div className="login">
     <a href="/ " className="buttonL"> <button>Login</button> </a>
     <a href=" /" className="buttonR"> <button>Register</button> </a>
   </div>
    </ul>
    
   <input type="checkbox" id="check" />
    <label htmlFor="check" className="checkbtn">
    <i className="fa fa-align-justify"></i>
    </label>
   </nav>
   </div>
  )
}

export default Header