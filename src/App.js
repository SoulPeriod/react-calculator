import React, { Component } from 'react';
import './App.css';
import Results from './Components/Results';
import KeyPad from './Components/KeyPad';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

 
    calculate = () => {
        let checkResult = ''
        // Interesting edge case! 
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // Why did you decide to use the || operator here? What happens if eval returns 0?
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                // 0 might be a better default value!
                result: "nope"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        
        return (
            <div>
                <div className="calculator-body">
                    <h1>Calculate</h1>
                    <Results result={this.state.result}/>
                    <KeyPad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
