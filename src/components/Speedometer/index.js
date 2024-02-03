// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onApplyBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevSate => ({speed: prevSate.speed - 10}))
    }
  }

  onAccelerateSpeed = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevSate => ({speed: prevSate.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-container">
        <h1 className="title"> SPEEDOMETER </h1>
        <img
          className="speedo-image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="heading">Speed Is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            className="button-1"
            type="button"
            onClick={this.onAccelerateSpeed}
          >
            Accelerate
          </button>
          <button
            className="button-2"
            type="button"
            onClick={this.onApplyBreak}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
