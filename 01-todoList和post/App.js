import React, {Component} from 'react';
import './App.css';
import Search from './component/demo3/search/index'
import List from './component/demo3/list/index'

class App3 extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Search />
                    <List/>
                </div>
            </div>
        );
    }
}

export default App3;
