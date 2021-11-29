import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import About from './pages/About/index'
import Home from './pages/Home/index'
import MyNavLink from './components/MyNavLink/index'
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="container">
                    <MyNavLink to='/about'>about</MyNavLink>
                    <MyNavLink to='/home'>ho1me</MyNavLink>
                    <span>展示区</span>
                    <div>
                        <Route path='/about' component={About}/>
                        <Route path='/home' component={Home}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
