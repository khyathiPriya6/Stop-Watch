import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, seconds: 0}

  clearCountDown = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      clearInterval(this.interval)
    }
  }

  startTimer = () => {
    this.setState({isTimerRunning: true})
    this.interval = setInterval(() => {
      this.countDown()
    }, 1000)
  }

  countDown = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
    console.log(this.state)
  }

  stopTimer = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      this.clearCountDown()
    }
    this.setState({isTimerRunning: false})
  }

  resetTimer = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      this.clearCountDown()
    }
    this.setState({isTimerRunning: false, seconds: 0})
  }

  getInTimerFormat = () => {
    const {seconds} = this.state

    const minutesValue = Math.floor(seconds / 60)
    const secondsValue = Math.floor(seconds % 60)

    const minutesInStringFormat =
      minutesValue > 9 ? minutesValue : `0${minutesValue}`
    const secondsInStringFormat =
      secondsValue > 9 ? secondsValue : `0${secondsValue}`

    return `${minutesInStringFormat}:${secondsInStringFormat}`
  }

  render() {
    const timerValue = this.getInTimerFormat()
    return (
      <div className="app-container">
        <div className="main-container">
          <h1>Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-img"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="timer-countdown">{timerValue}</h1>
            <div className="btn-container">
              <button
                type="submit"
                className="start-btn"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                type="submit"
                className="stop-btn"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="submit"
                className="reset-btn"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
