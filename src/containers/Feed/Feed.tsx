import React, { useEffect, useState } from 'react';
import EventCard from '../../components/EventCard/EventCard';
import './Feed.scss';
import { SERVER_URL } from '../../vars';

interface IFeed {
  title: string;
  city: string;
  country: string;
  description: string;
  id: string;
}

const Feed: React.FC = () => {
  const [feed, setFeed] = useState<IFeed[]>([]);
  const [offset, setOffset] = useState(0);

  const handleLoadEvents = (offset: number): void => {
    fetch(SERVER_URL + `/api/feed/${offset}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((r) => r.json())
      .then((data) => {
        const tempFeed = [...feed];
        setOffset(offset + 10);
        setFeed(tempFeed.concat(data));
      });
  };

  useEffect(() => {
    handleLoadEvents(0);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="feed-container">
      <div className="feed-box">
        {feed.map((event, index) => {
          return (
            <EventCard
              key={index}
              id={event.id}
              description={event.description}
              location={event.country + ', ' + event.city}
              title={event.title}
            />
          );
        })}
        <button className="submit-button" style={{ color: 'white' }} onClick={() => handleLoadEvents(offset)}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default Feed;
