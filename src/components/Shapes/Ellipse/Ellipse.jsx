import React from "react";
import './Ellipse.css';
import Poliih from './Poliih.png'

export default function Ellipse() {
  return (
    <div className="ellipse-container">
      <div className="ellipse"></div>
        <img src={Poliih} alt="foto do centro" className="ellipse-imagem" />
    </div>
  );
}
