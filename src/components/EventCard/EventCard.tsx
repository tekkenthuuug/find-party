import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.scss';

interface IEventCard {
  title: string;
  location: string;
  description: string;
  id: string;
}

const EventCard: React.FC<IEventCard> = ({ title, location, description, id }) => {
  return (
    <Link to={`/events/${id}`}>
      <div className="event-card">
        <div className="event-card_head">
          <h1>{title}</h1>
          <h3>{location}</h3>
        </div>
        <p className="event-card_desc">{description}</p>
      </div>
    </Link>
  );
};

export default EventCard;
