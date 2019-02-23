import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import Keyboard from './Keyboard';
import * as math from 'mathjs';

class App extends Component {
  state = {
    operations: [],
    display: '0'
  }

  setDisplay = value => {
    this.setState({
      display: value
    })
  }

  handleEval = () => {

  }

  handleClick = (sign) => {
    switch (sign) {
      case 'AC':
        this.setState({
          operations: [],
          display: '0'
        });
        break;
      case '/':
        this.setState(prevState => ({
          operations: [...prevState.operations, sign]
        }));
        break;
      default:
        this.setState(prevState => ({
          operations: [...prevState.operations, sign],
          display: prevState.display + sign
        }))
    }

  }

  render() {
    return (
      <div className="App">
        <Display value={this.state.display} />
        <Keyboard click={this.handleClick} />
      </div>
    );
  }
}

export default App;
