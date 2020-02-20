import React from 'react';
import './Loading.scss';

interface ILoading {
  backgroundColor?: string;
  spinnerSize?: string;
  containerHeight?: string;
}

const Loading: React.FC<ILoading> = ({
  backgroundColor = '#1D1D21',
  spinnerSize = '100px',
  containerHeight = '100vh'
}) => {
  return (
    <div style={{ backgroundColor, height: containerHeight }} className="loading-screen">
      <div className="spin" style={{ width: spinnerSize, height: spinnerSize }}></div>
    </div>
  );
};

export default Loading;
