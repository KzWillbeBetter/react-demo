import React, {Component} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import About from './component/About/index'
import Home from './component/Home/index'
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                    <div className="container">
                            <Link to='/about'>about</Link><br/>
                            <Link to='/home'>home</Link>
                        <div>
                            <span>展示区</span>
                            <div>
                                <Routes>
                                    <Route path='/about' element={<About/>}/>
                                    <Route path='/home' element={<Home/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default App;
