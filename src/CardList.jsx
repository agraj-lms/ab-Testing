// src/CardList.js
import React from "react";
import Card from "./Card";
import "./Card.css";
import Navbar from "./Navbar";

const CardList = ({ cards, text }) => {
  return (
    <>
      <Navbar text={text} />

      <div className="card-list">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </>
  );
};

export default CardList;
