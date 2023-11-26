// https://www.eolink.com/news/post/63190.html
// https://juejin.cn/post/6844903901544742925
import React from 'react';

import { Button, Form, FormControl } from 'react-bootstrap';
import ProgressBar from '../component/progressbar';

function formatNumber(str) {
  if (!str) return '00';
  const num = Number(str);
  if (num > 0 && num < 10) {
    return `0${num}`;
  } return num;
}

export default class clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadFinished: false,
      timer: null,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      deadline: '2023, 12/25 12:00:00',
      newTime: {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
      },
    };

    this.changeTargetTime = this.changeTargetTime.bind(this);
    this.loadFinished = this.loadFinished.bind(this);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUtil(this.state.deadline), 1000);
  }

  componentWillUnmount() {
    const { timer } = this.state;
    clearInterval(timer);
  }

  onValueChange(value, key) {
    const { newTime } = this.state;
    newTime[Object.keys(newTime)[key]] = value;
    this.setState({ newTime: { ...newTime } });
  }

  getTimeUtil(newTime) {
    const time = Date.parse(newTime) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.setState({
      days,
      hours,
      minutes,
      seconds,
    });
  }

  changeTargetTime() {
    const { newTime } = this.state;
    const year = newTime.year ? newTime.year : '1970  ';
    const month = newTime.month ? newTime.month : '1';
    const day = newTime.day ? newTime.day : '1';
    const hour = formatNumber(newTime.hour);
    const minute = formatNumber(newTime.minute);
    const second = formatNumber(newTime.second);
    this.setState({ deadline: `${year} ${month}/${day} ${hour}:${minute}:${second}` });
  }

  loadFinished() {
    this.setState({ isLoadFinished: true });
  }

  render() {
    const {
      isLoadFinished,
      deadline,
      days,
      hours,
      minutes,
      seconds,
      newTime,
    } = this.state;
    return (
      <div className="component-container">
        {!isLoadFinished ? <ProgressBar loadFinished={this.loadFinished} />
          : (
            <div className="component-container">
              <div className="clock-title">
                Countdown to {deadline}
              </div>
              <Form inline className="center-block">
                {Object.keys(newTime).map((ele, i) => (
                  <FormControl
                    className="Deadline-input"
                    placeholder={ele}
                    key={i}
                    onChange={(e) => this.onValueChange(e.target.value, i)}
                  />
                ))}
                <Button
                  disabled={!deadline}
                  onClick={this.changeTargetTime}
                >
                  Submit
                </Button>
              </Form>
              <div className="clock-container">
                <div className="clock-days">{days >= 0 ? days : days + 1} days</div>
                <div className="clock-hours">{hours >= 0 ? hours : hours + 1} hours</div>
                <div className="clock-minutes">{minutes >= 0 ? minutes : minutes + 1} minutes</div>
                <div className="clock-seconds">{seconds < 10 && seconds >= 0 ? `0${seconds}` : seconds} seconds</div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}
