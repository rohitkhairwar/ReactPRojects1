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
                <hr/>
                <h1>Welcome to Calculator App</h1>
            </div>
            
        )
    }
    
};


export default header;