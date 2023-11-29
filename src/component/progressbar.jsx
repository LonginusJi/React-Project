import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function ProgressBar(props) {
  const [length, setLength] = useState(0);
  const [background, setBackground] = useState('');
  const progressBar = useRef();
  progressBar.current = length;

  useEffect(() => {
    const loader = setInterval(() => {
      if (progressBar.current === 100) {
        props.loadFinished();
        clearInterval(loader);
        return;
      }
      // eslint-disable-next-line no-shadow
      setLength((length) => length + 1);
      const secondStart = 180 - progressBar.current;
      const thirdStart = 200 - progressBar.current;
      setBackground(`linear-gradient(0.25turn, rgb(47, 11, 252) 0%, rgb(255, 25, 25) ${secondStart}%, rgb(18, 233, 57) ${thirdStart}%)`);
    }, 50);
  }, []);

  return (
    <div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${length}%`, background }} />
      </div>
      <span className="progress-label">
        Loading:
        {length}
        %
      </span>
    </div>
  );
}

ProgressBar.propTypes = {
  loadFinished: PropTypes.func.isRequired,
};
