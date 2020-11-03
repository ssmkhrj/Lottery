import React, { Component } from "react";
import LotteryBall from "./LotteryBall";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40,
  };

  constructor(props) {
    super(props);
    this.state = { balls: Array.from({ length: this.props.numBalls }) };
    this.generateRandomBalls = this.generateRandomBalls.bind(this);
  }

  generateRandomBalls() {
    // So since we are using this.state inside setState we use the callback style to update state
    const duplicateCheck = {};
    this.setState((curState) => ({
      balls: this.state.balls.map((ball) => {
        let randNum = Math.floor(Math.random() * this.props.maxNum) + 1;
        while (duplicateCheck.hasOwnProperty(randNum)) {
          randNum = Math.floor(Math.random() * this.props.maxNum) + 1;
        }
        duplicateCheck[randNum] = true;
        return randNum;
      }),
    }));
  }

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.balls.map((n) => (
            <LotteryBall num={n} />
          ))}
        </div>
        <button onClick={this.generateRandomBalls}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
