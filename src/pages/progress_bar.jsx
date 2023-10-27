import React from "react";

import { Button } from 'react-bootstrap';

export class ProgressBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loader: null,
    }

    this.startProgress = this.startProgress.bind(this);
    this.resetProgress = this.resetProgress.bind(this);
  }

  startProgress() {
    let progressBar = document.querySelector('.progress-bar')
    let length = 0;
    const loader = setInterval(() => {
      if (length === 100) {
        clearInterval(loader)
      } else {
        length++;
        progressBar.style.width = length + '%';
        progressBar.style.innerWidth = length + '%';
      }
    }, 100);

    this.setState({ loader })
  }

  resetProgress() {
    clearInterval(this.state.loader)
    document.querySelector('.progress-bar').style.width = '0%'
  }

  render() {
    return (
      <div className="component-container">
        <div className="progress-bar-container">
          <div className="progress-bar" />
        </div>
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