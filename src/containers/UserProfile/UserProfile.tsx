import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import ErrorScreen from '../../components/NotFound/NotFound';
import { IUserProfileProps } from '../../types/types';
import CommentsBlock from '../../components/CommentsBlock/CommentsBlock';

import './UserProfile.scss';

interface IUserProfileState {
  username: string;
  country: string;
  city: string;
  firstName: string;
  lastName: string;
  description: string;
}

const UserProfile: React.FC<IUserProfileProps> = ({ userID }) => {
  const [userProfile, setUserProfile] = useState<IUserProfileState>({
    username: '',
    country: '',
    city: '',
    firstName: '',
    lastName: '',
    description: ''
  });

  const [err, setErr] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/api/users/${userID}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((r) => r.json())
      .then((data) => {
        if (data === 'User not found') {
          setErr(true);
        }
        setUserProfile(data);
      });
  }, [userID]);

  const getField = (arg1: string, arg2: string, coma: boolean): string => {
    return arg1 ? (arg2 ? `${arg1}${coma ? ',' : ' '} ${arg2}` : arg1) : '';
  };

  if (err) {
    return <ErrorScreen errorMessage="User not found!" />;
  }

  if (!userProfile.username) {
    return <Loading />;
  }

  return (
    <div className="profile-page">
      <section className="profile-card">
        <div className="info">
          <div className="profile-avatar"></div>
          <div className="profile-info">
            <div className="profile__head">
              <h2 className="head__username">{userProfile.username}</h2>
              <h2 className="head__location">{getField(userProfile.country, userProfile.city, true)}</h2>
            </div>
            <h3>{getField(userProfile.firstName, userProfile.lastName, false)}</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse officia corrupti facilis animi voluptatibus
              perferendis laborum! Perferendis voluptate aliquid officia officiis beatae incidunt optio illum nulla
              voluptatem pariatur, ea accusantium.
            </p>
            <div className="badge-section">
              <div className="badge">
                <span>Created: 19</span>
              </div>
              <div className="badge">
                <span>Attended: 19</span>
              </div>
              <div className="badge">
                <span>Enrolled: 19</span>
              </div>
            </div>
          </div>
        </div>
        <CommentsBlock userID={userID} />
      </section>
    </div>
  );
};

export default React.memo(UserProfile);
