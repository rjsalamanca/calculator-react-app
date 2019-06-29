import React, { Component } from 'react';

import Operators from './Operators';
import NumPad from './NumPad';

import './App.css';
import './Calculator.css';

const regex = /\+|\-|\*|\//g;


class App extends Component{
    state = {
        result: null,
        input: '',
        lastInput: ''
    }

    addInput = async (currInput) => {
        let storeLastInput = '';
        // let newInput = this.state.input + currInput;
        storeLastInput = this.state.input === '' ?  '' : this.state.input[this.state.input.length-1];
        await this.setState({
            lastInput: storeLastInput
        })

        if( (storeLastInput.toString().match(regex) !== null) && (currInput.toString().match(regex) !== null) ){
            if(storeLastInput !== currInput){
                let changeOperator = this.state.input.split('');
                changeOperator.splice(this.state.input.length-1,1,currInput)
                //setSTATE
                this.setState({
                    input: changeOperator.join('')
                });
            }
        } else {
            if((storeLastInput === '') && (currInput.toString().match(regex) !== null)){
                console.log('Start with a number!');
            } else {
                this.setState({
                    input: this.state.input += currInput
                })
            }
        }

        console.log(this.state)
    }

    clear = () => {
        console.log('clearing');

        this.setState({ 
            result: null,
            input: '',
            lastInput: ''
        });
    }

    calculate = () => {
        let { lastInput, input } = this.state;
        let getNumbers = input.split(regex).map(curr=>Number(curr));
        let getOperators = input.replace(/[0-9]|\./g,'').split('');
    
        lastInput = input === '' ?  '' : input[input.length-1];
    
        if(!lastInput.match(regex)){
            // Look for multiplication
            let multiply = getOperators.indexOf('*');
            while(multiply !== -1){
                getNumbers.splice(multiply,2, getNumbers[multiply] * getNumbers[multiply +1]);
                getOperators.splice(multiply, 1);
                multiply = getOperators.indexOf('*');
            }
    
            // Look for division
            let divide = getOperators.indexOf('/');
            while(divide !== -1){
                getNumbers.splice(divide,2, getNumbers[divide] / getNumbers[divide +1]);
                getOperators.splice(divide, 1);
                divide = getOperators.indexOf('/');
            }
    
            // Look for addition & subtraction
            let adddition = getOperators.indexOf('+');
            while(adddition !== -1){
                getNumbers.splice(adddition,2, getNumbers[adddition] + getNumbers[adddition +1]);
                getOperators.splice(adddition, 1)
                adddition = getOperators.indexOf('+')
            }
    
            let subtraction = getOperators.indexOf('-');
            while(subtraction !== -1){
                getNumbers.splice(subtraction,2, getNumbers[subtraction] - getNumbers[subtraction +1]);
                getOperators.splice(subtraction, 1);
                subtraction = getOperators.indexOf('-');
            }
    
            console.log(getNumbers);
            this.setState({
                input: getNumbers
            });
        }
    }

    render(){
        const { input } = this.state;
        return (
            <div className="wrapper">
                <div className="calculator">
                    <div className="input" id="input">{input}</div>
                    <div className="buttons">
                        <Operators operatorClick={this.addInput}/>
                        <NumPad numberClick={this.addInput} clear={this.clear}/>
                        <div className="equal" id="result" onClick={(e) => this.calculate()}>=</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
