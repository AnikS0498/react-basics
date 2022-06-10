import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 0 ,counter10:10};
    
    // this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleButton2Click = this.handleButton2Click.bind(this);
    this.handleButton3Click = this.handleButton3Click.bind(this);
  }

  handleButtonClick = () => {
    console.log("+ Button has been clicked");
    this.setState({ counter: this.state.counter + 1 });
  };

  handleButton2Click = () => {
    console.log("- Button has been clicked");
    this.setState({ counter: this.state.counter - 1 });
  };
  handleButton3Click = () => {
    //console.log("- Button has been clicked");
    this.setState({ counter10: this.state.counter10 +10 });
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
        <button className="btn btn-danger mr-2" onClick={this.handleButton2Click}>
          -1
        </button>
        <button className="btn btn-warning" onClick={this.handleButton3Click}>
          +10
        </button>
s        <p>{this.state.counter}</p>
        <p>{this.state.counter10}</p>
      </div>
    );
  }
}
