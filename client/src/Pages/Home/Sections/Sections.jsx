import React from "react";
import './Sections.css';
import img1 from "./../../../Assets/image44.jpg";
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
            Greetings and welcome to Business Fusion, a convergence point where corporate strategy seamlessly integrates with consumer dynamics. Immerse yourself in a professional environment where meaningful connections are forged, and the intricacies of the marketplace's tapestry are thoroughly explored. We invite you to join us in actively contributing to the shaping of the future of industry excellence through strategic enterprise integration.
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
            Embark on a journey to entrepreneurial excellence and financial empowerment at our upcoming conference. Explore dynamic sessions with expert insights on entrepreneurial mindset, essential skills, and successful financing. This transformative experience also touches on Corporate Social Responsibility (RSE), enhancing discussions on entrepreneurship's positive societal impact. Join us for an enriching event to engage with thought leaders, industry experts, and peers, propelling your projects to new heights.
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
