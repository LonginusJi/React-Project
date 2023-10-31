import React from 'react';

export default class Rect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [10, 6, 8, 9, 12],
      data1: 10,
      data2: 6,
      data3: 8,
      data4: 9,
      data5: 12,
    };
  }

  componentDidMount() {
    const { data } = this.state;
    const rects = document.querySelectorAll('.rect');
    rects.forEach((el, i) => {
      el.style.height = `${data[i] * 10}px`;
    });
  }

  render() {
    const {
      data1,
      data2,
      data3,
      data4,
      data5,
    } = this.state;
    return (
      <div className="rect-container">
        <div className="rect">
          <span className="rect-label">{data1}</span>
        </div>
        <div className="rect">
          <span className="rect-label">{data2}</span>
        </div>
        <div className="rect">
          <span className="rect-label">{data3}</span>
        </div>
        <div className="rect">
          <span className="rect-label">{data4}</span>
        </div>
        <div className="rect">
          <span className="rect-label">{data5}</span>
        </div>
      </div>
    );
  }
}
