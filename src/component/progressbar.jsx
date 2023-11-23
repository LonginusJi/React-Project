import React, { useState, useEffect, useRef } from 'react';

export default function progressBar(props) {
  const [length, setLength] = useState(0);
  const [background, setBackground] = useState('');
  const progressBarRef = useRef();
  progressBarRef.current = length;

  useEffect(() => {
    const loader = setInterval(() => {
      if (progressBarRef.current === 100) {
        props.loadFinished();
        return clearInterval(loader);
      } else {
        setLength((length) => length + 1);
        const secondStart = 180 - progressBarRef.current;
        const thirdStart = 200 - progressBarRef.current;
        setBackground(`linear-gradient(0.25turn, rgb(47, 11, 252) 0%, rgb(255, 25, 25) ${secondStart}%, rgb(18, 233, 57) ${thirdStart}%)`);
      }
    }, 50);
  }, []);

  return (
    <div>
      <div className="progress-bar-container">
        <div className="progress-bar" ref={progressBarRef} style={{ width: `${length}%`, background }} />
      </div>
      <span className="progress-label">
        Loading:
        {length}
        %
      </span>
    </div>
  );
}
