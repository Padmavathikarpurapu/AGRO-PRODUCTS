import React from 'react';
import homebanner from '../Pictures_for_project/homebanner.jpg';
import './Home.css'; // Create a CSS file for styling, e.g., Home.css

const Home = () => {
  return (
    <div className="home-container">
      <img src={homebanner} alt='homebanner' className="full-width-image" />
    </div>
  );
};

export default Home;
