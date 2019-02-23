import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import Keyboard from './Keyboard';
import * as math from 'mathjs';

class App extends Component {
  state = {
    operations: '',
    display: '0',
    evaluated: false,
    decimalLimit: false
  }

  displayLimit = () => {
    if (this.state.display.length >= 12 && !this.isOperator(this.state.operations.charAt(this.state.operations.length - 1))) return false;
    return true;
  }

  isOperator = sign => {
    const regex = /[*/+-]/;
    return regex.test(sign)
  }

  handleInput = (sign) => {

    switch (sign) {
      case "=":
        const regexp = /[*/+-]/;
        if ((regexp.test(this.state.operations) && !this.isOperator(this.state.operations.charAt(this.state.operations.length - 1)))) {
          let result = math.eval(this.state.operations);
          this.setState({
            operations: "" + result,
            display: result,
            evaluated: true
          });
        }
        break;
      case "AC":
        this.setState({
          operations: '',
          evaluated: false,
          decimalLimit: false
        });
        break;
      case "/":
        if (this.state.operations !== '') {
          if (this.isOperator(this.state.operations.charAt(this.state.operations.length - 1))) {
            const operations = this.state.operations.slice(0, this.state.operations.length - 1) + sign;
            this.setState({
              operations
            })
          } else {
            this.setState(prevState => ({
              operations: prevState.operations + sign,
              evaluated: false,
              decimalLimit: false
            }));
          }
        }
        break;
      case "+":
        if (this.state.operations !== '') {
          if (this.isOperator(this.state.operations.charAt(this.state.operations.length - 1))) {
            const operations = this.state.operations.slice(0, this.state.operations.length - 1) + sign;
            this.setState({
              operations
            })
          } else {
            this.setState(prevState => ({
              operations: prevState.operations + sign,
              evaluated: false,
              decimalLimit: false
            }));
          }
        }
        break;
      case "-":
        if (this.state.operations !== '') {
          if (this.isOperator(this.state.operations.charAt(this.state.operations.length - 1))) {
            const operations = this.state.operations.slice(0, this.state.operations.length - 1) + sign;
            this.setState({
              operations
            })
          } else {
            this.setState(prevState => ({
              operations: prevState.operations + sign,
              evaluated: false,
              decimalLimit: false
            }));
          }
        }
        break;
      case "x":
        if (this.state.operations !== '') {
          if (this.isOperator(this.state.operations.charAt(this.state.operations.length - 1))) {
            const operations = this.state.operations.slice(0, this.state.operations.length - 1) + sign;
            this.setState({
              operations
            })
          } else {
            this.setState(prevState => ({
              operations: prevState.operations + "*",
              evaluated: false,
              decimalLimit: false
            }));
          }
        }
        break;
      case ".":
        if (!this.state.decimalLimit && this.state.operations !== '' && !this.isOperator(this.state.operations.charAt(this.state.operations.length - 1)) && !this.state.evaluated) {
          this.setState(prevState => ({
            operations: prevState.operations + sign,
            display: prevState.display + sign,
            decimalLimit: true,
          }))
        }
        break;
      case "0":
        if (!this.displayLimit()) return false;

        if (this.state.operations !== "0") {
          if (this.state.operations === '') {
            this.setState(prevState => ({
              operations: prevState.operations + sign,
              display: sign
            }))
          } else if (this.state.evaluated) {
            this.setState(prevState => ({
              operations: sign,
              display: sign,
              evaluated: false
            }))
          } else {
            if (this.state.operations.charAt(this.state.operations.length - 1) === "/") {
              console.log("Nie dziel przez 0");
            } else {
              if (this.isOperator(this.state.operations.charAt(this.state.operations.length - 1))) {
                this.setState(prevState => ({
                  operations: prevState.operations + sign,
                  display: sign
                }))
              } else {
                this.setState(prevState => ({
                  operations: prevState.operations + sign,
                  display: prevState.display + sign
                }))
              }
            }
          }

        }
        break;
      default:
        if (!this.displayLimit()) return false;

        if (this.state.operations === "" || this.state.evaluated) {
          this.setState(prevState => ({
            operations: sign,
            display: sign
          }))
        } else if (this.isOperator(this.state.operations.charAt(this.state.operations.length - 1))) {
          this.setState(prevState => ({
            operations: prevState.operations + sign,
            display: sign
          }))
        } else {
          this.setState(prevState => ({
            operations: prevState.operations + sign,
            display: prevState.display + sign
          }))
        }
        break;
    }
  }

  componentDidUpdate() {
    if (this.state.operations === '' && this.state.display !== '0') {
      this.setState({
        display: '0'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Display value={this.state.display} />
        <Keyboard click={this.handleInput} />
      </div>
    );
  }
}

export default App;
