import React, { Component } from "react";
import "./LotteryBall.css";

class LotteryBall extends Component {
  render() {
    return <div className="LotteryBall">{this.props.num}</div>;
  }
}

export default LotteryBall;
