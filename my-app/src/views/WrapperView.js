import HomeView from "./HomeView/HomeView";
import React from "react";
import './WrapperView.css';
import GameView from "./GameView/GameView";

function WrapperView() {
    return (
      <div className="container">
        <div className="rectangle">
        < GameView />
        </div>
      </div>
    );
  }
  
  export default WrapperView;
  