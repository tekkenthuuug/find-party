import React from 'react';
import "./HomePage.scss";
const video = require("./background-vid.mp4");

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <video autoPlay muted loop id="back-vid">
        <source src={video} type="video/mp4" />
      </video>
      <div className="homepage__container">
        <header>Find party for the event</header>
        <div className="homepage__buttons">
          <button>
            Create event
          </button>
          <button>
              Find event
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage;

