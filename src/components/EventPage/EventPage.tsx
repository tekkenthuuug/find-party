import React, { useEffect, useState } from 'react';
import CommentsBlock from '../CommentsBlock/CommentsBlock';
import NotFound from '../NotFound/NotFound';
import './EventPage.scss';
import { SERVER_URL } from '../../vars';
import { IEventProps } from '../../types/types';

interface IEventState {
  title: string;
  contact: string;
  description: string;
  country: string;
  city: string;
  creatorID: string;
  creatorName: string;
  id: string;
}

const EventPage: React.FC<IEventProps> = ({ eventID, userID }) => {
  const [event, setEvent] = useState<IEventState>({
    title: '',
    contact: '',
    description: '',
    country: '',
    city: '',
    creatorID: '',
    creatorName: '',
    id: ''
  });
  const [isEnrolled, setIsEndrolled] = useState(false);

  useEffect(() => {
    fetch(SERVER_URL + `/api/events/info/${eventID}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.enrolledusers.includes(userID)) {
          setIsEndrolled(true);
        }
        setEvent(data);
      });
  }, [eventID, userID]);

  const handleEnroll = () => {
    fetch(SERVER_URL + `/api/events/enroll`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventID: event.id,
        userID: userID
      })
    })
      .then((r) => r.json())
      .then((data) => {
        setIsEndrolled(true);
      });
  };

  const { title, country, city, contact, description, creatorName } = event;

  if (!title) {
    return <NotFound errorMessage="Can't find this event!" />;
  }

  return (
    <div className="eventPage-container">
      <div className="eventPage-box">
        <div className="box_head">
          <p>{contact}</p>
          <div className="head_title-creator">
            <h2>{title}</h2>
            <p>{creatorName}</p>
          </div>
          <p>
            {country}, {city}
          </p>
        </div>
        <div className="box_description">{description}</div>
        {userID ? (
          <button className="submit-button box_enroll-button" disabled={isEnrolled} onClick={handleEnroll}>
            <span>{isEnrolled ? 'Already enrolled' : 'Enroll'}</span>
          </button>
        ) : null}
        <CommentsBlock target={{ name: 'events', id: eventID }} loadingMarginTop="50px" />
      </div>
    </div>
  );
};

export default EventPage;
