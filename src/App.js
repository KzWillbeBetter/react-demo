import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom'
import About from './pages/About/index'
import Home from './pages/Home/index'
import MyNavLink from './components/MyNavLink/index'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <MyNavLink to='/about' a={1}>about</MyNavLink>
                    <MyNavLink to='/home'>home</MyNavLink>
                    <span>展示区</span>
                    <div className={'border'}>
                        {/*注册路由*/}
                        <Route  exact={true} path='/about' component={About}/>
                        <Route path='/home' component={Home}/>
                        <Redirect to={'/about'}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
