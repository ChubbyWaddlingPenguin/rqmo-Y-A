import React from 'react';
import './HomeView.css'; // Import your CSS file for styling
import BestButton from '../../components/BestButton'

const HomeView = () => {
  return (
    <div>
        <h2>Instructions</h2>
        <BestButton>Start Game</BestButton>
      </div>
  );
}

export default HomeView;