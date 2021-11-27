import React, {Component} from 'react';
import './App.css';
import Search from './component/demo2/search/index'
import List from './component/demo2/list/index'

class App3 extends Component {
    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }

    updateState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Search updateState={this.updateState}/>
                    <List {...this.state}/>
                </div>
            </div>
        );
    }
}

export default App3;
