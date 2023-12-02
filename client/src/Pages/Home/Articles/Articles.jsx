import React from "react";
import "./Articles.css";
import img1 from "./../../../Assets/image 8.png";
import img2 from "./../../../Assets/image 9.png";
import img3 from "./../../../Assets/image 10.png";

export default function Articles() {
  let articleData = [
    { title: "AI and IT: Transforming Business Success", img: img1, date: "11/11/2023" },
    { title: "METAVERSE, A REALITY ?", img: img2, date: "11/11/2023" },
    { title: "AI: Shaping the Future", img: img3, date: "11/11/2023" },
  ];

  return (
    <div className="Article-container">
      <div className="title1">FEATURED ARTICLES</div>
      <div className="subtitle1">
        <div className="line-sub"></div>
        <div>Lorem ipsum dolor sit amet </div>
        <div className="line-sub"></div>
      </div>
      <div className="articles">
        {articleData.map((article, index) => (
          <div className="article" key={index}>
            <img src={article.img} alt={article.title} />
            <div className="date">{article.date}</div>
            <div className="title">{article.title}</div>
            <button className="checkbtn">Check Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
