import React, {Component} from 'react';
import './App.css';
import Search from './component/demo2/search/index'
import List from './component/demo2/list/index'

class App extends Component {
    state = {
        users:[]
    }

    getUser = (data) => {
        this.setState({users:data})
        console.log(this.state.users)
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Search getUser={this.getUser}/>
                    <List users={this.state.users}/>
                </div>
            </div>
        );
    }
}

export default App;
