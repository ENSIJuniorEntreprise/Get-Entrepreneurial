import React from "react";
import './Sections.css';
import img1 from "./../../../Assets/image1.png";
import img2 from "./../../../Assets/image2.png";
import img3 from "./../../../Assets/image3.png";


export default function Sections() {
  return (

    <div className="sections-container">
      <div className="title1">UNVEILING THE EXPERIENCE</div>
      <div className="subtitle11">
        <div className="line-sub"></div>
        <div>Discover the Unseen! </div>
        <div className="line-sub"></div>
      </div>

       <div>

        <div className="section">
          <div className="part1">
            <div className="section-title"><span className="orange">BUSINESS FUSION</span></div>
            <div className="para1">
            Welcome to Business Fusion, where commerce seamlessly merges corporate strategy with consumer dynamics. Immerse yourself in a realm where connections are forged, and the marketplace's intricate tapestry is explored. Join us in shaping the future of industry excellence through strategic enterprise integration.
            </div>
            {/* <button className="btn">Subscribe {">"}</button> */}
          </div>
          <div className="part2">
            <img src={img1} className="image1" />
          </div>
        </div>

        {/* <div className="section2">
          <div className="part1">
            <div className="section-title"><span className="orange">B</span>USINESS <span className="orange">TO C</span>USTMER</div>
            <div className="para1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam.
            </div>
          </div>
          <div className="part2">
            <img src={img2} className="image1" />
          </div>
        </div> */}


        <div className="section2">
          <div className="part1">
            <div className="section-title"><span className="orange">CONFERENCE</span> <span className="orange"></span></div>
            <div className="para1">
            Step into the Conference, a nexus of ideas and innovation. Join thought leaders converging to share insights, foster collaboration, and propel industries forward. Immerse yourself in a dynamic space where the future unfolds through vibrant discussions and collective wisdom.
            </div>
          </div>
          <div className="part2">
            <img src={img3} className="image1" />
          </div>
        </div>
      </div> 

    </div>
  );
}
