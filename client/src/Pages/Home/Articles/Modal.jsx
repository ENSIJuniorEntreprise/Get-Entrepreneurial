import React from "react";
import "./Modal.css";

export default function Modal({ article, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <img src={`http://localhost:8000/Article/ArticleImg/${article.img}`} alt={article.title} />
        <div className="date">
      {new Date(article.date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      })}
    </div>
        <div className="title">{article.title}</div>
        <div className="desc">{article.content}</div>
      </div>
    </div>
  );
}