import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin, BsInstagram } from "react-icons/bs";

import logo from "./../../Assets/new.png"
function Footer() {
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="part111">

          <img src={logo} alt="logo" className="logo-img1" />
          <div className="para">
            <span className="slogann">#Forge_The_Future</span>
          </div>

        </div>


        <div className="lien part22">
        <h3>PAGES</h3>
          <ul className="footer-ul">
            <li>
              <a className="footer-a" href="/">
                Accueil
              </a>
            </li>
            <li>
              <a className="footer-a" href="/Program">
                Programme
              </a>
            </li>
            <li>
              <a className="footer-a" href="/Collab">
                Partenaires
              </a>
            </li>
            <li>
              <a className="footer-a" href="/Register">
                Inscription
              </a>
            </li>
          </ul>
        </div>




        <div className="footer-contact lien">
          <h3>NOUS CONTACTER</h3>
          <div className="span">
            <span className="footer-span">22 222 222</span>

            <a href="mailto:contact.junior.ensi@gmail.com">
              <span className="footer-span mail">contact.junior.ensi@gmail.com</span>
            </a> 

            <a href="mailto:commercial.junior.ensi@gmail.com">
              <span className="footer-span mail">commercial.junior.ensi@gmail.com</span>
            </a>
          </div>

          <div className="social">
            <a className="footer-a" href="">
              <FaFacebookF size={"25px"} className="icones" />
            </a>
            <a className="footer-a" href="">
              <BsInstagram size={"25px"} className="icones" />
            </a>
            <a className="footer-a" href="">
              <BsLinkedin size={"25px"} className="icones" />
            </a>



          </div>

        </div>



      </div>




      <div className="copy">
        © All rights reserved - ENSI JE 2024
      </div>
    </div>
  );
}

export default Footer;
