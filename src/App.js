import './App.css';
import Head from './component/head'
import Content from './component/content'
import Footer from './component/footer'


import React, {Component} from 'react';

class App extends Component {
    state = {
        todos: [
            {id:1,name:'吃饭',done:false},
            {id:2,name:'打球',done:true},
            {id:3,name:'学习',done:false},

        ]
    }

    render() {
        return (
            <div className="App">
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Head/>
                        <Content todos={this.state.todos}/>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
