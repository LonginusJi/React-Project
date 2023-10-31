import React from "react";

import { Button, Form, FormControl } from 'react-bootstrap';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      deadline: 'Dec. 25, 2023'
    };

    this.onDeadLineChange = this.onDeadLineChange.bind(this);
  }

  componentWillMount() {
    this.getTimeUtil(this.state.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUtil(this.state.deadline), 1000)
  }

  getTimeUtil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.setState({
      days,
      hours,
      minutes,
      seconds
    })
  }

  leadingZero(num) {
    return num < 10 ? `0${num}` : num
  }

  onDeadLineChange(value) {
    this.setState({ newDeadline: value });
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline })
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div className='component-container'>
        <div className='App-title'>
          Countdown to {this.state.deadline}
        </div>
        <Form inline className='center-block'>
          <FormControl
            className='Deadline-input'
            placeholder='New date' onChange={e => this.onDeadLineChange(e.target.value)} />
          <Button onClick={this.changeDeadline.bind(this)}>Submit</Button>
          <div className='Clock-days'>{days < 10 ? `0${days}` : days} days</div>
          <div className='Clock-hours'>{hours < 10 ? `0${hours}` : hours} hours</div>
          <div className='Clock-minutes'>{minutes < 10 ? `0${minutes}` : minutes} minutes</div>
          <div className='Clock-seconds'>{seconds < 10 ? `0${seconds}` : seconds} seconds</div>
        </Form>
      </div>
    )
  }
}
