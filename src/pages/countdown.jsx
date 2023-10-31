import React from "react";

import { Button, Form, FormControl } from 'react-bootstrap'

export class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      countdownStart: false,
      countdownStopped: false,
      countdownFinish: false,
      timeSetted: false,
      deadline: 0,
      seconds: 0,
    };

    this.onDeadLineChange = this.onDeadLineChange.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  onDeadLineChange(value) {
    if (value > 0) {
      this.setState({ deadline: value, timeSetted: true });
    } else {
      this.setState({ timeSetted: false });
    }
  }

  startTimer() {
    this.setState({ countdownStart: true, countdownFinish: false });
    const { deadline } = this.state;
    this.setState({ seconds: deadline })

    const timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds - 1 })
      if (this.state.seconds === 0) {
        this.setState({ countdownFinish: true })
        clearInterval(timer);
      }
    }, 1000);

    this.setState({ timer: timer })
  }

  stopTimer() {
    clearInterval(this.state.timer);
    this.setState({countdownStopped: true});
  }

  resetTimer() {
    this.setState({
      countdownStart: false,
      countdownStopped: false,
      countdownFinish: false,
      seconds: 0
    });
  }

  render() {
    const { countdownStart, countdownStopped, countdownFinish, deadline, seconds } = this.state;
    return (
      <div className='component-container'>
        <Form inline className='center-block'>
          <FormControl
            className='Deadline-input'
            placeholder='Set countdown seconds'
            onChange={e => this.onDeadLineChange(e.target.value)} />
          {!countdownStart ?
            <Button disabled={!this.state.timeSetted} onClick={this.startTimer}>Start</Button>
            : <Button onClick={this.stopTimer}>Stop</Button>
          }
          <Button disabled={!countdownStopped && !countdownFinish} onClick={this.resetTimer}>Reset</Button>
        </Form>
        {countdownStart && !countdownFinish && <div className='App-title'>
          Countdown to {deadline}: {seconds} {seconds === 1 ? 'second' : 'seconds'} remain
        </div>}
        {countdownFinish && <div className='App-title'>
          Countdown finished
        </div>}
      </div>
    )
  }
}
