import React from 'react';
import './HomeView.css'; // Import your CSS file for styling

const HomeView = () => {
  return (
    <div className="home-container">
      <header>
        <div className="header-left">
          <button>RQMO Home</button>
          <button>Spare 1</button>
        </div>
        <h1 className="header-title">Project Title</h1>
        <div className="header-right">
          <button>Spare 2</button>
          <button>Spare 3</button>
        </div>
      </header>
      <div className="content">
        <h2>Game Name</h2>
        {/* Additional content goes here */}
        <BestButton>Start Game</BestButton>
      </div>
      <footer>Footer things</footer>
    </div>
  );
}

export default HomeView;