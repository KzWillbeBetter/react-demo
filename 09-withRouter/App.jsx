import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import About from './pages/About/index'
import Home from './pages/Home/index'
import MyNavLink from './components/MyNavLink/index'
import Header from './components/Head/index'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header a={3}/>
                    <div className={'flex'}>
                        <MyNavLink to='/home'>Home</MyNavLink>
                        <MyNavLink to='/about' a={1}>About</MyNavLink>
                    </div>
                    <div className={'border'}>
                        <Switch>
                            {/*注册路由*/}
                            <Route path='/about' component={About}/>
                            <Route path='/home' component={Home}/>
                            <Redirect to={'/home'}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
