import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };

    // this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleButton2Click = this.handleButton2Click.bind(this);
  }

  handleButtonClick = () => {
    console.log("+ Button has been clicked");
    this.setState({ counter: this.state.counter + 1 });
  };

  handleButton2Click = () => {
    console.log("- Button has been clicked");
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-success mr-2"
          onClick={() => this.handleButtonClick()}
        >
          +1
        </button>
        <button className="btn btn-danger" onClick={this.handleButton2Click}>
          -1
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
