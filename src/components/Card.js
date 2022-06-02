import React from "react";

function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="group__element card">
      <button className="group__element-trash" type="button"></button>
      <img
        className="group__element-img"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="group__element-caption">
        <h2 className="group__element-text">{card.name}</h2>
        <div className="group__like">
          <button className="group__element-like" type="button"></button>
          <h3 className="group__like-counter">{card.likes.length}</h3>
        </div>
      </div>
    </li>
  );
}

export default Card;
