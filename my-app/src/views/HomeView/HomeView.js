import React from 'react';
import './HomeView.css';

const HomeView = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Game Name</h1>
        {/* Extra stuff if needed */}
        <button>Start Game</button>
      </div>
      <footer>footer things</footer>
    </div>
  );
}

export default HomeView;