import React, {Component} from 'react';
import './App.css';
import Head from './component/head'
import Content from './component/content'
import Footer from './component/footer'

class App extends Component {
    state = {
        todoList:
            [
                {id: 1, name: '吃饭', done: true},
                {id: 2, name: '刷牙', done: false},
                {id: 3, name: '洗澡', done: false}
            ]
    }
    getTodo = (data) => {
        const todos = this.state.todoList
        const newTodos=[data,...todos]
        // todos.push(data)
        console.log(newTodos)
        this.setState({todoList: newTodos})
    }

    render() {
        return (
            <div className="App">
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Head getTodo={this.getTodo}/>
                        <Content todos={this.state.todoList}/>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
