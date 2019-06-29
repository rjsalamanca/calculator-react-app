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
        storeLastInput = this.state.input == '' ?  '' : this.state.input[this.state.input.length-1];

        // if( (storeLastInput.match(regex) != null) && (currInput.match(regex) != null) ){
        //     if(storeLastInput != currInput){
        //         let changeOperator = input.innerHTML.split('');
        //         changeOperator.splice(input.innerHTML.length-1,1,addInput)
        //         input.innerHTML = changeOperator.join('')
        //     }
        // } else {
        //     if((lastInput == '') && (addInput.match(regex) != null)){
        //         console.log('Start with a number!');
        //     } else {
        //         input.innerHTML += addInput; 
        //     }
        // }

        await this.setState({
            input: newInput,
            lastInput: storeLastInput
        });

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

    render(){
        const { result, input } = this.state;
        return (
            <div className="wrapper">
                <div className="calculator">
                    <div className="input" id="input">{input}</div>
                    <div className="buttons">
                        <Operators operatorClick={this.addInput}/>
                        <NumPad numberClick={this.addInput} clear={this.clear}/>
                        <div className="equal" id="result">=</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
