import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(1000);
  const [countSecond, setCountSecond] = useState(Math.ceil(countdown/100))

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress < 10000) {
        setProgress((prevProgress) => prevProgress + 10);
      }

      if (countdown > 0) {
        setCountdown((prevCountdown) => prevCountdown - 1);
        setCountSecond(Math.ceil(countdown/100));
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, [progress, countdown]);


  return (
    <>
      <div aria-label={`${countSecond}초 남았어요`} tabIndex={0}>
        <p aria-hidden="true">
          <span className="strong">{countSecond}</span>초 남았어요
        </p>
      </div>
      <div style={{ width: '100%', height:'8px', borderRadius:'8px', backgroundColor: 'rgba(17,17,17,.1)', marginTop:'6px' }}>
          <div
              style={{
              width: `${progress/100}%`,
              height: '8px',
              borderRadius:'8px',
              backgroundColor: '#111111',
              }}
          ></div>
      </div>
    </>
  );
};

export default ProgressBar;
