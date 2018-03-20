import React, { Component } from 'react';

import './color.css';

import InputValue from '../input-values/input-values';
import CardGroup from '../card-group/card-group';

class Color extends Component {

  constructor(props) {
    super(props);

    this.state = {
        color: '',
        number: '',
    }

  }

  render() {
    let groups = [];

    return (
      <div className="App">
        <InputValue onChangeColor={this.setColor} onChangeNumber={this.setNumber.bind(this)}></InputValue>
        <div className="container">
          <CardGroup mainColor={this.state.color} number={this.state.number}></CardGroup>
        </div>
      </div>
    );
  }

  setColor = (e) => {
    this.setState({color: e.target.value});
  }

  setNumber(e) {
    this.setState({number: e.target.value});
  }

}

export default Color;
