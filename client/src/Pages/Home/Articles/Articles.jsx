import React, { useState, useEffect } from "react";
import "./Articles.css";
import img1 from "./../../../Assets/image 8.png";
import img2 from "./../../../Assets/image 9.png";
import img3 from "./../../../Assets/image 10.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Articles() {
  const articleData = [
    { title: "AI and IT: Transforming Business Success", img: img1, date: "11/11/2023" },
    { title: "METAVERSE, A REALITY ?", img: img2, date: "11/11/2023" },
    { title: "AI: Shaping the Future", img: img3, date: "11/11/2023" },
    { title: "4", img: img1, date: "11/11/2023" },
    { title: "5", img: img1, date: "11/11/2023" },
    { title: "6", img: img1, date: "11/11/2023" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [articlesToShow, setArticlesToShow] = useState(3);

  const updateArticlesToShow = () => {
    if (window.innerWidth < 601) {
      setArticlesToShow(1);
    } else if (window.innerWidth < 901) {
      setArticlesToShow(2);
    } else {
      setArticlesToShow(3);
    }
  };

  useEffect(() => {
    updateArticlesToShow();
    window.addEventListener("resize", updateArticlesToShow);

    return () => {
      updateArticlesToShow();
      window.removeEventListener("resize", updateArticlesToShow);
    };
  }, [articlesToShow]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      const nextSlide = (prevSlide + 1) % (articleData.length - (articlesToShow - 1));
      return nextSlide === 0 ? 0 : nextSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + (articleData.length - (articlesToShow - 1))) % (articleData.length - (articlesToShow - 1)));
  };

  return (
    <div className="Article-container">
      <div className="title1">FEATURED ARTICLES</div>
      <div className="subtitle1">
        <div className="line-sub"></div>
        <div>Lorem ipsum dolor sit amet </div>
        <div className="line-sub"></div>
      </div>
      <div className="cont">
        <button className="prevBtn" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <div className="articles">
          {articleData.slice(currentSlide, currentSlide + articlesToShow).map((article, index) => (
            <div key={index} className="article">
              <img src={article.img} alt={article.title} />
              <div className="date">{article.date}</div>
              <div className="title">{article.title}</div>
              <button className="checkbtn">Check Details</button>
            </div>
          ))}
        </div>
        <button className="nextBtn" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
