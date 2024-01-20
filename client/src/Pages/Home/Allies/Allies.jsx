import React, { useState, useEffect } from "react";
import axios from "axios";
import './Allies.css'
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Allies() {
  const [allies, setAllies] = useState([]);
  const baseURL = "https://102.211.210.43:8000";


  useEffect(() => {
    // Fetch allies from the backend when the component mounts
    const fetchAllies = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/collab`);
        setAllies(response.data);
      } catch (error) {
        console.error("Error fetching allies:", error);
      }
    };

    fetchAllies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    className: `testimonial-content--3 testimonial-grid`,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
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
        <div className="sub">Shared Visions, Shared Success </div>
        <div className="line-sub"></div>
      </div>

      <div className="containerPartenaires">
        <SlickSlider {...settings}>
        {Array.isArray(allies) && allies.map((ele) => (
  <div className="item" key={ele.id}>
    {ele.website && (
      <a href={`${ele.website}`} target="_blank" rel="noopener noreferrer">
        {ele.img && (
          <img src={`${baseURL}/api/collab/collabImg/${ele.img}`} alt={`Ally ${ele.id}`} className="image" />
        )}
      </a>
    )}
  </div>
))}
        </SlickSlider>
      </div>
    </div>
  );
}
