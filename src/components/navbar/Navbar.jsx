import React from "react";
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './Navbar.css'

const Navbar = () => {
  return <div className='gpt3__navbar'>
    <div className="gpt3__navbar-links">
      <div className="gpt3__navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      {/* navigation links */}
      <div className="gpt3__navbar-links_container">
        <p><a href="#href">Home</a></p>
        <p><a href="#wgpt3">What is GPT?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
      </div>
      <div className="gpt3__navbar-btn_container">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
    </div>
    </div>;
};

export default Navbar;
 