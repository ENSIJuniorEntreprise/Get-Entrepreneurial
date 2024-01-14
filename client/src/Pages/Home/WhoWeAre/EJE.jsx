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
            <div>Explore Our Story</div>
            <div className="line-sub"></div>
          </div>
        </div>
      </div>

      <div className="whoWeAre-section1">
        <div className="partie1">
          <div><span className="orange"> Ensi Junior Enterprise, </span> established in 2006, is a student association Affiliated with the National School of Computer Science, our mission is to introduce Tunisian students to professional life through activities focusing on three main pillars: training, events, and ICT project development.
          <br></br>
Additionally, we actively embrace the duty of fostering an entrepreneurial mindset in the Tunisian ecosystem, driven by our activities, especially events that enhance the link between students and businesses.
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
