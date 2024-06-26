import React from 'react';
import './BestButton.css'; // Import your CSS file for styling

const BestButton = ({ children, onClick }) => {
  return (
    <button className="BestButton" onClick={onClick}>
      {children}
    </button>
  );
}

export default BestButton;