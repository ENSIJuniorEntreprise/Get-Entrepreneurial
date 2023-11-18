import React from "react";
import './Header.css';
import logo from "./../../../Assets/new.png"
import logo2 from "./../../../Assets/logo2.png"
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="container0">
      <div className="container1"> 
      <img src={logo} className="logo1"/>
      <div className="line"></div>
      <div className="slogan">#Forge_The_Future</div>
      <button className="subscribe">SUBSCRIBE</button>
      <div className="date-container">
        <FaMapMarkerAlt className="icon"/>
        <div className="utica">UTICA,</div>
        <div className="date">24</div>
        <div className="th">th</div>
        <div className="jan">JANUARY 2024</div>
      </div>
      <img src={logo2} className="logo2" />
      </div>
    </div>
  );
}
