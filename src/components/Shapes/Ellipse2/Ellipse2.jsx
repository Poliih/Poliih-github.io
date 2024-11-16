import React from "react";
import './Ellipse2.css';

export default function Ellipse2({ children, width = 220 }) {
  return (
    <div className="ellipse2-container" style={{ width, height: width }}>
      {children}
    </div>
  );
}
