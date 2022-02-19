import React, { Component } from "react";
import "./App.css";
import Btns from "./components/Btns";
import Inputs from "./components/Inputs";
import Delete_btn from "./components/Delete_btn";

class App extends Component {
  constructor(props) {
    super(props);
    // states
    this.state = {
      input: "",
    };
  }

  // displays the values of the button pressed, changes states to the value pressed
  render_input = (value) => {
    this.setState({ input: this.state.input + value });
  };

  // evauluates the input, uses built in eval function
  equalOperator = () => {
    this.setState({ input: eval(this.state.input) });
  };

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <h1>2520 React Calculator</h1>
          {/* input 'Screen' */}
          <Inputs input={this.state.input} />
          {/* row 1 */}
          <div className="row">
            <Btns click={this.render_input}>7</Btns>
            <Btns click={this.render_input}>8</Btns>
            <Btns click={this.render_input}>9</Btns>
            <Btns click={this.render_input}>/</Btns>
          </div>
          {/* row 2 */}
          <div className="row">
            <Btns click={this.render_input}>4</Btns>
            <Btns click={this.render_input}>5</Btns>
            <Btns click={this.render_input}>6</Btns>
            <Btns click={this.render_input}>*</Btns>
          </div>
          {/* row 3 */}
          <div className="row">
            <Btns click={this.render_input}>1</Btns>
            <Btns click={this.render_input}>2</Btns>
            <Btns click={this.render_input}>3</Btns>
            <Btns click={this.render_input}>+</Btns>
          </div>
          {/* row 4 */}
          <div className="row">
            <Btns click={this.render_input}>.</Btns>
            <Btns click={this.render_input}>0</Btns>
            <Btns click={this.equalOperator}>Enter</Btns>
            <Btns click={this.render_input}>-</Btns>
          </div>
          {/* final row, delete button */}
          <div className="row">
            <Delete_btn clears={() => this.setState({ input: "" })}>
              Clear
            </Delete_btn>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
