import React from 'react';
import ReactDOM from 'react-dom';
import main from './Main';
import footers from './footers.css';

function footer(props) {
    return (
        <h1 className="footers">Total: {props.prop1}</h1>
    )
};

export default footer;