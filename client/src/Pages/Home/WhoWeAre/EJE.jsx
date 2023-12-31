import React from "react";
import './EJE.css';
import logoo from "./../../../Assets/Logoo.png"
import Chiffre from './chiffre'
import ImageSlider from "./ImageSlider";
import img1 from "./../../../Assets/slider1.jpg"
import img2 from "./../../../Assets/slider2.jpg"
import img3 from "./../../../Assets/slider3.jpg"


export default function EJE() {
  let slides = [img1, img2, img3]


  return (
    <div className="EJE-container">
      <img src={logoo} className="logooo" />
      <div className="EJE">
        <img src={logoo} className="logoo" />
        <div className="EJE-Title-Part">
          <div className="title">WHO WE ARE</div>
          <div className="subtitle">
            <div className="line-sub"></div>
            <div>Lorem ipsum dolor sit amet</div>
            <div className="line-sub"></div>
          </div>
        </div>
      </div>

      <div className="whoWeAre-section1">
        <div className="partie1">
          <div><span className="orange"> Lorem ipsum dolor </span> sit amet vhgb consectetur adipisicing elit. jbb Maxime mollitia, molestiae quas vel sint commodi repudiandae bb consequuntur  hvjhvjvjhvjyyrtsrts
            volupmolestiae quas vel sint vjvv commodi repudiandae nvgy khvj nconsequuntur voluptatum  nb v laborum. molestiae quas vel sint commodi repudiandae laborum jh consequuntur voluptatum nvhv v laborum. repudiandae nvchchc bj consequuntur voluptatum vbjvjvb laborum.
          </div>
        </div>
        <div className="part2">

          <div className="container-chiffre ch1">
            <div className="chiffre">+<Chiffre number="18" adding="" /></div>
            <div className="label">Years</div>
          </div>

          <div className="container-chiffre ch2">
            <div className="chiffre">+<Chiffre number="25" adding="" /></div>
            <div className="label">Partners</div>
          </div>

          <div className="container-chiffre ch3">
            <div className="chiffre">+<Chiffre number="25" adding="" /></div>
            <div className="label">Events</div>
          </div>

          <div className="container-chiffre ch4">
            <div className="chiffre">+<Chiffre number="75" adding="" /></div>
            <div className="label">Projects</div>
          </div>

        </div>
      </div>
      <div className="containerStyles0">
        <div className="containerStyles">
          <ImageSlider slides={slides} />
        </div>
      </div>


    </div>
  );
}
