import React, { useEffect, useState } from 'react';
import './UserProfile.scss';
import Loading from '../../components/Loading/Loading';
import ErrorScreen from '../NotFound/NotFound';
import TextInput from '../TextInput/TextInput';

type Comment = {
  senderName: string;
  content: string;
};

interface IUserProfile {
  username: string;
  country: string;
  city: string;
  firstName: string;
  lastName: string;
  description: string;
}

const UserProfile: React.FC<{ userID: string; user: { id: string; username: string } }> = ({ userID, user }) => {
  const [userProfile, setUserProfile] = useState<IUserProfile>({
    username: '',
    country: '',
    city: '',
    firstName: '',
    lastName: '',
    description: ''
  });
  const [profileComments, setProfileComments] = useState<Array<Comment>>([]);
  const [comment, setComment] = useState('');
  const [err, setErr] = useState(false);

  const handleSendComment = () => {
    fetch(`http://localhost:8000/api/comments/${userID}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: comment,
        senderName: user.username,
        targetID: userID
      })
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  };

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

    fetch(`http://localhost:8000/api/comments/${userID}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((r) => r.json())
      .then((data) => {
        setProfileComments(data);
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
        <div className="comments">
          <h4>Comments</h4>
          <div className="comments_block">
            {profileComments.length ? (
              profileComments.map((comment, index) => {
                return (
                  <div className="comment" key={index}>
                    <div className="comment-content">
                      <h5>{comment.senderName}</h5>
                      <p>{comment.content}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>Loading</h1>
            )}
          </div>
          {user.id ? (
            <div>
              <TextInput placeholder="Write your comment..." handleChange={(event) => setComment(event.target.value)} />
              <button onClick={handleSendComment}>Send</button>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default React.memo(UserProfile);
