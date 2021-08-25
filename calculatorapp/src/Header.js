import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css'
import main from './Main';

class header extends React.Component  {
    constructor() {
        super()
        this.state= {
            inputs: 0
        }
    }

    render() {
        return (
            <div className="header">
                <input type="number" />{this.state.input}
                <hr/>
                <h1>Result</h1>
            </div>
            
        )
    }
    
};


export default header;