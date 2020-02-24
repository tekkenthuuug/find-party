import React from 'react';
import './Loading.scss';

interface ILoading {
  backgroundColor?: string;
  spinnerSize?: string;
  containerHeight?: string;
  marginTop?: string;
}

const Loading: React.FC<ILoading> = ({
  backgroundColor = '#1D1D21',
  spinnerSize = '100px',
  containerHeight = '100vh',
  marginTop = '0'
}) => {
  return (
    <div style={{ backgroundColor, height: containerHeight }} className="loading-screen">
      <div className="spin" style={{ width: spinnerSize, height: spinnerSize, marginTop }}></div>
    </div>
  );
};

export default Loading;
