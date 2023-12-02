import React from "react";
import './Header.css';
import logo from "./../../../Assets/new.png"
import logo2 from "./../../../Assets/logo2.png"
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="container0">
      <div className="container1">
        <div className="space"></div>
        <div className="date-container">
          <FaMapMarkerAlt className="icon" />
          <div className="utica">UTICA,</div>
          <div className="date">24</div>
          <div className="th">th</div>
          <div className="jan">JANUARY 2024</div>
        </div>
        <div className="Header-Event"><span className="get">GET</span> Entrepreneurial</div>
        <div className="subtitle0">
        <div className="line"></div>
        <div className="slogan">#Forge_The_Future</div>
        <div className="line"></div>
      </div>
        <button className="subscribe">SUBSCRIBE</button>
        <img src={logo2} className="logo2" /> 
      </div>
    </div>
  );
}
