import { React, Component } from 'react';
import './Countdown.css'

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    }
  }

  componentDidMount() {
    let endTimeJson = {
      day: 31,
      month: 12,
      year: 2023,
      hour: 23,
      min: 59,
      sec: 59
    }

    let currTimeJson = this.getDate();

    let daysFromMonths = 0;
    switch (endTimeJson.month - currTimeJson.month) {
      case 1:
        daysFromMonths = 30
        break
      case 2:
        daysFromMonths = 61
        break
      case 3:
        daysFromMonths = 91
        break
      case 4:
        daysFromMonths = 122
        break
      case 5:
        daysFromMonths = 153
        break
      case 6:
        daysFromMonths = 183
        break
      case 7:
        daysFromMonths = 214
        break
      case 8:
        daysFromMonths = 244
        break
      case 8:
        daysFromMonths = 275
        break
      case 10:
        daysFromMonths = 303
        break
      case 11:
        daysFromMonths = 334
        break
    }

    let diffDays = 365 * (endTimeJson.year - currTimeJson.year) +
      daysFromMonths +
      (endTimeJson.day - currTimeJson.day)
    this.setState({ days: diffDays })
    console.log("Days till: " + diffDays)

    let diffHours = endTimeJson.hour - currTimeJson.hour
    this.setState({ hours: diffHours })
    console.log("Hours till: " + diffHours)

    let diffMins = endTimeJson.min - currTimeJson.min
    this.setState({ min: diffMins })
    console.log("Mins till: " + diffMins)

    let diffSecs = endTimeJson.sec - currTimeJson.sec
    this.setState({ sec: diffSecs })
    console.log("Secs till: " + diffSecs)


    this.myInterval = setInterval(() => {
      if (this.state.sec == 0) {
        if (this.state.sec == 0) {
          if (this.state.min == 0) {
            if (this.state.hours == 0) {
              if (this.state.days == 0) {
                clearInterval(this.myInterval)
              } else {
                this.setState(({ days }) => ({
                  days: days - 1,
                  hours: 23,
                  min: 59,
                  sec: 59
                }))
              }

            } else {
              this.setState(({ hours }) => ({
                hours: hours - 1,
                min: 59,
                sec: 59
              }))
            }


          } else {
            this.setState(({ min }) => ({
              min: min - 1,
              sec: 59
            }))
          }
        }
      } else {
        this.setState(({ sec }) => ({
          sec: sec - 1
        }))
      }

    }, 1000)
  }

  getDate() {
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hour = newDate.getHours();
    let min = newDate.getMinutes();
    let sec = newDate.getSeconds();

    return ({
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec
    })
  }

  render() {
    return (
      <div className='countdownBox'>
        <h3 className='title'>USS-UPI Doomsday Countdown</h3>
        <h1>
          {this.state.days} days,
          {this.state.hours < 10 ? `0${this.state.hours}` : this.state.hours}:
          {this.state.min < 10 ? `0${this.state.min}` : this.state.min}:
          {this.state.sec < 10 ? `0${this.state.sec}` : this.state.sec}
        </h1>
        <h3 className='title'>until unemployment</h3>
      </div>
    );
  }
}

export default Countdown;