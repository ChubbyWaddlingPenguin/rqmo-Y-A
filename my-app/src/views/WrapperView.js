import HomeView from "./HomeView/HomeView";
import React from "react";
import './WrapperView.css';

function WrapperView() {
    return (
      <div className="container">
        <div className="rectangle">
        < HomeView />
        </div>
      </div>
    );
  }
  
  export default WrapperView;
  