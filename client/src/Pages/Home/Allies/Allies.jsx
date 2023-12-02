import React from "react";
import './Allies.css'
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Allies() {
  const allies = [
    { id: 1, logo: "https://pic.clubic.com/v1/images/2063553/raw" },
    { id: 2, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/EY_logo_2019.svg/800px-EY_logo_2019.svg.png" },
    { id: 3, logo: "https://media.licdn.com/dms/image/C560BAQE0N4qKJB0n6A/company-logo_200_200/0/1631323272759?e=2147483647&v=beta&t=2Ls7e6TyC_KT9w6RT_VVR4LBQMyIZasGIiE35lGf6ZY" },
    { id: 4, logo: "https://fabskill.s3.eu-west-3.amazonaws.com/job_visual/1670509519-884-1797.png" },

  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    className: `testimonial-content--3 testimonial-grid`,
    responsive: [
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
          },
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          },
      },
  ],

  };
  
  return (
    <div className="allies">
      <div className="title1">OUR VALUED ALLIES</div>
      <div className="subtitle1">
        <div className="line-sub"></div>
        <div>Lorem ipsum dolor sit amet </div>
        <div className="line-sub"></div>
      </div>

      <div className="containerPartenaires">
      <SlickSlider {...settings}>
      {
          allies.map(ele => (
      <div className="item">
            <img src={ele.logo} className="image"/>
          </div>))}
        </SlickSlider>
      </div>
        </div>
  );
}
