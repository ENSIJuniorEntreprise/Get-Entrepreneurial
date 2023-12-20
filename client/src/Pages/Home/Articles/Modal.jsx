import React from "react";
import "./Modal.css";

export default function Modal({ article, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <img src={article.img} alt={article.title} />
        <div className="date">{article.date}</div>
        <div className="title">{article.title}</div>
        <div className="desc">{article.description}</div>
      </div>
    </div>
  );
}
