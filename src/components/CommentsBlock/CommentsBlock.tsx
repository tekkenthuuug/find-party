import React, { useEffect, useState, useContext, Fragment } from 'react';
import TextInput from '../TextInput/TextInput';
import { UserContext } from '../../App';
import { TComment } from '../../types/types';
import Loading from '../Loading/Loading';
import './CommentBlock.scss';

interface ICommentBlockProps {
  userID: string;
}

const CommentsBlock: React.FC<ICommentBlockProps> = ({ userID }) => {
  const user = useContext(UserContext);
  const [profileComments, setProfileComments] = useState<Array<TComment>>([]);
  const [fetching, setFetching] = useState(true);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8000/api/comments/${userID}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((r) => r.json())
      .then((data) => {
        setFetching(false);
        setProfileComments(data);
      });
  }, [userID]);

  const handleSendComment = () => {
    if (comment.length < 1) {
      return;
    }

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
        const commentsClone = [...profileComments];
        commentsClone.unshift({ senderName: user.username, content: comment });
        setProfileComments(commentsClone);
        console.log(data);
      });
  };

  if (fetching) {
    return <Loading backgroundColor="transparent" containerHeight="100%" spinnerSize="50px" />;
  }

  return (
    <div className="comments">
      <h4>Comments</h4>
      <div className="comments_block">
        {profileComments.length < 1 ? (
          <h1>No comments found</h1>
        ) : (
          <Fragment>
            {profileComments.map((comment, index) => {
              return (
                <div className="comment" key={index}>
                  <div className="comment-content">
                    <h5>{comment.senderName}</h5>
                    <p>{comment.content}</p>
                  </div>
                </div>
              );
            })}
          </Fragment>
        )}
      </div>
      {user.id ? (
        <Fragment>
          <TextInput placeholder="Write your comment..." handleChange={(event) => setComment(event.target.value)} />
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '6px' }}>
            <button className="comment-submit" onClick={handleSendComment} disabled={comment.length > 265}>
              Send
            </button>
            {comment.length > 265 ? (
              <div className="error" style={{ display: 'inline-block', marginLeft: '10px' }}>
                Max. comment length: 265.
              </div>
            ) : null}
          </div>
        </Fragment>
      ) : null}
    </div>
  );
};

export default CommentsBlock;
