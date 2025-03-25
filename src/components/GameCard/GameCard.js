import React from 'react';
import './GameCard.css';

export default function GameCard({ icon, title, url }) {
  return (
    <a href={url} className="game-card">
      <img src={icon} alt={title} className="game-icon" />
      <h3 className="game-title">{title}</h3>
    </a>
  );
}