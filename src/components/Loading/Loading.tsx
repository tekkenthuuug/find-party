import React from 'react';
import './Loading.scss';

interface ILoading {
  backgroundColor?: string;
  size?: string;
}

const Loading: React.FC<ILoading> = ({ backgroundColor = '#1D1D21', size = '100px' }) => {
  return (
    <div style={{ backgroundColor }} className="loading-screen">
      <div className="spin" style={{ width: size, height: size }}></div>
    </div>
  );
};

export default Loading;
