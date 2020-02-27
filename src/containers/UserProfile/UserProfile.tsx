import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';
import { IUserProfileProps, IUserProfileBase } from '../../types/types';
import CommentsBlock from '../../components/CommentsBlock/CommentsBlock';

import './UserProfile.scss';

interface IUserProfileState extends IUserProfileBase {
  enrolled: number;
  created: number;
}

const UserProfile: React.FC<IUserProfileProps> = ({ userID }) => {
  const [userProfile, setUserProfile] = useState<IUserProfileState>({
    username: '',
    country: '',
    city: '',
    firstName: '',
    lastName: '',
    description: '',
    enrolled: 0,
    created: 0
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
    return <NotFound errorMessage="User not found!" />;
  }

  const { username, country, city, firstName, lastName, created, enrolled, description } = userProfile;

  if (!username) {
    return <Loading />;
  }

  return (
    <div className="profile-page">
      <section className="profile-card">
        <div className="info">
          <div className="profile-avatar"></div>
          <div className="profile-info">
            <div className="profile__head">
              <h2 className="head__username">{username}</h2>
              <h2 className="head__location">{getField(country, city, true)}</h2>
            </div>
            <h3>{getField(firstName, lastName, false)}</h3>
            <p>{description}</p>
            <div className="badge-section">
              <div className="badge">
                <span>Created: {created}</span>
              </div>
              <div className="badge">
                <span>Enrolled: {enrolled}</span>
              </div>
            </div>
          </div>
        </div>
        <CommentsBlock target={{ id: userID, name: 'users' }} />
      </section>
    </div>
  );
};

export default React.memo(UserProfile);
