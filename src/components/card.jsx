import React from 'react';

const Card = ({ text }) => {
  return (
    <div style={{ backgroundColor: '#8b8bc7', margin:'20px', padding: '20px', color: 'white', borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <p>{text}</p>
    </div>
  );
}

const cardsArray = [
  { text: "Card 1" },
  { text: "Card 2" },
  { text: "Card 3" },
  { text: "Card 4" },
  { text: "Card 5" }
];

export { Card, cardsArray };
