import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';
import { INotFound } from '../../types/types';

const ErrorScreen: React.FC<INotFound> = ({ errorMessage }) => {
  return (
    <div className="not_found_container">
      <span className="not_found_error">{errorMessage}</span>
      <Link to="/">
        <span className="not_found_go_home">Go back home</span>
      </Link>
    </div>
  );
};

export default ErrorScreen;
