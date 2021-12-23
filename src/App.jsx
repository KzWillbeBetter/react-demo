import React, {Component} from 'react';
import './App.css';
import Count from "./components/Count";

class App extends Component {


    render() {
        return (
            <div className="App">
                <div className="container">
                   <Count/>
                </div>
            </div>
        );
    }
}

export default App;
