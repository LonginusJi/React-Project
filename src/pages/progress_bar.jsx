import React from "react";

import { Button } from 'react-bootstrap';

export class ProgressBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loader: null,
      length: 0
    }

    this.startProgress = this.startProgress.bind(this);
    this.resetProgress = this.resetProgress.bind(this);
  }

  startProgress() {
    let progressBar = document.querySelector('.progress-bar')
    let length = 0;
    const loader = setInterval(() => {
      if (length === 100) {
        clearInterval(loader);
      } else {
        length++;
        var firstStart = 100 -length
        var secondStart = 180-length
        var thirdStart = 200-length
        progressBar.style.background = `linear-gradient(0.25turn, rgb(47, 11, 252) ${firstStart}%, rgb(255, 25, 25) ${secondStart}%, rgb(18, 233, 57) ${thirdStart}%)`
        progressBar.style.width = length + '%';
        progressBar.style.innerWidth = length + '%';
        this.setState({ length });
      }
    }, 100);

    this.setState({ loader });
  }

  resetProgress() {
    clearInterval(this.state.loader);
    this.setState({ length: 0 });
    document.querySelector('.progress-bar').style.width = '0%';
    document.querySelector('.progress-bar').style.background = 'rgb(47, 11, 252)';
  }

  render() {
    const { length } = this.state;
    return (
      <div className="component-container">
        <div className="progress-bar-container">
          <div className="progress-bar" />
        </div>
        <span className="progress-label">
          Loading: {length}%
        </span>
        <div className="button-group">
          <Button onClick={this.startProgress}>
            Start progress
          </Button>
          <Button onClick={this.resetProgress}>
            Reset
          </Button>
        </div>
      </div>
    )
  }
}