import React from 'react';

import { Button, Form, FormControl } from 'react-bootstrap';

export default class clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      deadline: 'Dec. 25, 2023',
    };

    this.onDeadLineChange = this.onDeadLineChange.bind(this);
    this.changeDeadline = this.changeDeadline.bind(this);
  }

  componentWillMount() {
    this.getTimeUtil(this.state.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUtil(this.state.deadline), 1000);
  }

  onDeadLineChange(value) {
    this.setState({ newDeadline: value });
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
      seconds,
    });
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }

  isSubmitDisabled() {

  }

  render() {
    const {
      deadline,
      days,
      hours,
      minutes,
      seconds,
    } = this.state;
    return (
      <div className="component-container">
        <div className="clock-title">
          Countdown to {deadline}
        </div>
        <Form inline className="center-block">
          <FormControl
            className="Deadline-input"
            placeholder="Year"
            onChange={(e) => this.onDeadLineChange(e.target.value)}
          />
          <FormControl
            className="Deadline-input"
            placeholder="Month"
            onChange={(e) => this.onDeadLineChange(e.target.value)}
          />
          <FormControl
            className="Deadline-input"
            placeholder="Day"
            onChange={(e) => this.onDeadLineChange(e.target.value)}
          />
          <FormControl
            className="Deadline-input"
            placeholder="Hour"
            onChange={(e) => this.onDeadLineChange(e.target.value)}
          />
          <FormControl
            className="Deadline-input"
            placeholder="Minute"
            onChange={(e) => this.onDeadLineChange(e.target.value)}
          />
          <FormControl
            className="Deadline-input"
            placeholder="Second"
            onChange={(e) => this.onDeadLineChange(e.target.value)}
          />
          <Button
            disabled={this.isSubmitDisabled}
            onClick={this.changeDeadline}
          >
            Submit
          </Button>
        </Form>
        <div className="clock-container">
          <div className="clock-days">{days < 10 ? `0${days}` : days} days</div>
          <div className="clock-hours">{hours < 10 ? `0${hours}` : hours} hours</div>
          <div className="clock-minutes">{minutes < 10 ? `0${minutes}` : minutes} minutes</div>
          <div className="clock-seconds">{seconds < 10 ? `0${seconds}` : seconds} seconds</div>
        </div>
      </div>
    );
  }
}
