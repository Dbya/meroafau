import React from 'react';
import { Navbar,Container } from 'react-bootstrap';
import './header.css';


const Header = () => {
  return (
   <div className="mainHeader ">
   <nav>
   <input type="checkbox" id="check" />
   <div className="logo">NeutroLine</div>
    <ul className="navList">
    <li><a href="">Features</a> </li>
    <li><a href="">Company </a> </li>
    <li><a href="">Carrer</a> </li>
    <li><a href="">About</a> </li>
    </ul>
    <div className="login">
    <a href="/ " className="buttonL"> <button>Login</button> </a>
    <a href=" /" className="buttonR"> <button>Register</button> </a>
   </div>
   <label htmlFor="check" className='icon'><i className='fas fa-align-justify'></i></label>
   </nav>
   </div>
  )
}

export default Header