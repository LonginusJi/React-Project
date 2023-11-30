import React from 'react';

export default class Rect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [10, 6, 8, 9, 12],
    };
  }

  render() {
    const {
      data,
    } = this.state;
    return (
      <div className="rect-container">
        {data.map((d, i) => {
          const style = {
            position: 'relative',
            height: `${d * 10}px`,
            width: '10px',
            margin: '0 10px',
            background: 'linear-gradient(red, green)',
          };
          return (
            <div key={i} style={style}>
              <span>{d}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
