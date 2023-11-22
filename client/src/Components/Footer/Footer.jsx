import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsMessenger, BsInstagram } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import { SlArrowUp } from "react-icons/sl";
function Footer() {
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="part1">

          {/* <img src={} alt="logo" className="logo-img" /> */}
          <div className="para">
            <span className="footer-span">#Forge_The_Future</span>
          </div>

        </div>


        <div className="lien part2">
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
            <span className="footer-span">xxxxxxxxxx</span>

            <a href="mailto:contact@novastoreprint.com">
              <span className="footer-span mail">xxxxxxxxxx</span>
            </a>          </div>
          <div className="social">
            <a className="footer-a" href="">
              <FaFacebookF size={"25px"} className="icones" />
            </a>
            <a className="footer-a" href="">
              <BsInstagram size={"25px"} className="icones" />
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
