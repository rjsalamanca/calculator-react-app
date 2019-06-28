import React, { Component } from 'react';

import Operators from './Operators';
import NumPad from './NumPad';

import './App.css';
import './Calculator.css';

class App extends Component{
    state = {
        result: null,
        equation: ''
    }

    operatorClick(op){
        console.log(op);
    }

    render(){
        const { result } = this.state;
        return (
            <div className="wrapper">
                <div className="calculator">
                    <div className="input" id="input">{result}</div>
                    <div className="buttons">
                        <Operators operatorClick={this.operatorClick} dude={1}/>
                        <NumPad/>
                        <div className="equal" id="result">=</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
