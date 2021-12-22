import React, {Component} from 'react';
import './App.css';
import {Button} from "antd";

class App extends Component {

    state = {
        date1: 'new Date()',
        data: {
            a: 1,
            b: {
                b1: 2,
                b2: 21,
                b3: '',
            }
        }
    }
    start = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Button onClick={this.start} type="primary">Primary Button</Button>
                </div>
            </div>
        );
    }
}

export default App;
