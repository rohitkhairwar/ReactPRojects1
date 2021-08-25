import React from 'react';
import ReactDOM from 'react-dom';

class main extends React.Component  {
    constructor () {
        super ()
        this.state = {
            input: 0,
            firstInput: 0,
            finalInput: 0,
            total: 0
        }
    }

    handlechange1 = () => {
        this.setState (prevState => ({
            input: prevState.input * 10 + 1
        }))
    }
    handlechange2 = () => {
        this.setState (prevState => ({
            input: prevState.input * 10 + 2
        }))
    }
    handlechange3 = () => {
        this.setState (prevState => ({
            input: prevState.input * 10 + 3
        }))
    }
    handlechange4 = () => {
        this.setState (prevState => ({
            input: prevState.input * 10 + 4
        }))
    }
    handlechange5 = () => {
        this.setState (prevState => ({
            input: prevState.input * 10 + 5
        }))
    }
    handlechange6 = () => {
        this.setState (prevState => ({
            input: prevState.input * 10 + 6
        }))
    }
    handlechange7 = () => {
        this.setState (prevState => ({
            input: prevState.input * 10 + 7
        }))
    }
    handlechange8 = () => {
        this.setState (prevState => ({
            input: prevState.input * 10 + 8
        }))
    }
    handlechange9 = () => {
        this.setState (prevState => ({
            input: prevState.input * 10 + 9
        }))
    }
    handlechange0 = () => {
        this.setState (prevState => ({
            input: prevState.input * 10 + 0
        }))
    }
    handlechangeDot = () => {
        this.setState (prevState => ({
            input: prevState.input + "." 
        }))
    }
    handlechangeDivide = () => {
        this.setState (prevState => ({
            firstInput : prevState.input,
            total: prevState.firstInput / prevState.input,
            input: 0
        }))
    }
    handlechangeMultiply = () => {
        this.setState (prevState => ({
            firstInput : prevState.input,
            total: prevState.firstInput * prevState.input,
            input: 0
        }))
    }
    handlechangeAdd = () => {
        this.setState (prevState => ({
            firstInput : prevState.input,
            total: prevState.firstInput + prevState.input,
            input: 0
            
        }))
    }
    handlechangeSubtract = () => {
        this.setState (prevState => ({
            firstInput : prevState.input,
            total: prevState.firstInput - prevState.input,
            input: 0
        }))
    }
    handlechangeClear = () => {
        this.setState ({
            input: 0,
            firstInput: 0,
            finalInput: 0,
            total: 0
        })
    }
    handlechangeTotal = () => {
        this.setState ({
            finalInput: this.state.total
        })
    }
    render() {
        return (
            <>
            <button value="1" onClick={this.handlechange1}>1</button>
            <button onClick={this.handlechange2}>2</button>
            <button onClick={this.handlechange3}>3</button>
            <button onClick={this.handlechangeDivide}>/</button>
            <br/>
            <button onClick={this.handlechange4}>4</button>
            <button onClick={this.handlechange5}>5</button>
            <button onClick={this.handlechange6}>6</button>
            <button onClick={this.handlechangeMultiply}>*</button>
            <br/>
            <button onClick={this.handlechange7}>7</button>
            <button onClick={this.handlechange8}>8</button>
            <button onClick={this.handlechange9}>9</button>
            <button onClick={this.handlechangeSubtract}>-</button>
            <br/>
            <button onClick={this.handlechange0}>0</button>
            <button onClick={this.handlechangeDot}>.</button>
            <button onClick={this.handlechangeTotal}>=</button>
            <button onClick={this.handlechangeAdd}>+</button>
            <button onClick={this.handlechangeClear}>AC</button>
            <h2>FirstInput: {this.state.firstInput}</h2>
            <h2>SecondInput: {this.state.input}</h2>
            <h2>Total: {this.state.finalInput}</h2>
            </>
        )
    }
    
};


export default main;