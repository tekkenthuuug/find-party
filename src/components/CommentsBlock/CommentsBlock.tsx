import React, { useEffect, useState, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../TextInput/TextInput';
import { UserContext } from '../../App';
import { TComment } from '../../types/types';
import Loading from '../Loading/Loading';
import './CommentBlock.scss';
import { SERVER_URL } from '../../vars';

interface ICommentBlockProps {
  target: {
    name: 'users' | 'events';
    id: string;
  };
  loadingMarginTop?: string;
}

const CommentsBlock: React.FC<ICommentBlockProps> = ({ target, loadingMarginTop }) => {
  const user = useContext(UserContext);
  const [profileComments, setProfileComments] = useState<Array<TComment>>([]);
  const [fetching, setFetching] = useState(true);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetch(SERVER_URL + `/api/${target.name}/comments/${target.id}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((r) => r.json())
      .then((data) => {
        setFetching(false);
        setProfileComments(data);
      });
  }, [target]);

  const handleSendComment = () => {
    if (comment.length < 1) {
      return;
    }

    fetch(SERVER_URL + `/api/${target.name}/comments/`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: comment,
        senderName: user.username,
        senderID: user.id,
        targetID: target.id
      })
    })
      .then((r) => r.json())
      .then((data) => {
        const commentsClone = [...profileComments];
        commentsClone.unshift({ senderName: user.username, content: comment, senderID: user.id });
        setProfileComments(commentsClone);
      });
  };

  if (fetching) {
    return (
      <Loading backgroundColor="transparent" containerHeight="100%" spinnerSize="50px" marginTop={loadingMarginTop} />
    );
  }

  return (
    <div className="comments">
      <h4>Comments</h4>
      <div className="comments_block">
        {profileComments.length < 1 ? (
          <h1 className="no-comments">No comments found</h1>
        ) : (
          <Fragment>
            {profileComments.map((comment, index) => {
              return (
                <div className="comment" key={index}>
                  <div className="comment-content">
                    <Link to={`/users/${comment.senderID}`}>
                      <h5>{comment.senderName}</h5>
                    </Link>
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
              <div className="error" style={{ marginLeft: '10px' }}>
                Max. comment length: 265.
              </div>
            ) : null}
          </div>
        </Fragment>
      ) : null}
    </div>
  );
};

export default React.memo(CommentsBlock);
