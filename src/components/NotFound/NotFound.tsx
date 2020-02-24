import React from 'react';
import { useHistory } from 'react-router-dom';
import { INotFound } from '../../types/types';
import './NotFound.scss';

const ErrorScreen: React.FC<INotFound> = ({ errorMessage }) => {
  const history = useHistory();

  return (
    <div className="not_found_container">
      <span className="not_found_error">{errorMessage}</span>
      <span onClick={() => history.goBack()} className="not_found_go_home">
        Go back
      </span>
    </div>
  );
};

export default ErrorScreen;
