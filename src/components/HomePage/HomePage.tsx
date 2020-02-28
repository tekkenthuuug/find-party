import React from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';
const video = require('./background-vid.mp4');

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <video autoPlay muted loop id="back-vid">
        <source src={video} type="video/mp4" />
      </video>
      <div className="homepage__container">
        <header>Find party for the event</header>
        <div className="homepage__buttons">
          <Link to="/events/create" className="btn">
            <p>Create event</p>
          </Link>
          <Link to="/feed" className="btn">
            <p>Find event</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
