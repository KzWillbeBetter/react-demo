import React, {Component} from 'react';
import './App.css';
import Search from './component/demo2/search/index'
import List from './component/demo2/list/index'

class App extends Component {
    state = {

    }


    render() {
        return (
            <div className="App">
                <div className="container">
                    <Search></Search>
                    <List></List>
                </div>
            </div>
        );
    }
}

export default App;
