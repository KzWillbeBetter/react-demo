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
        const newTodos = [data, ...todos]
        // todos.push(data)
        this.setState({todoList: newTodos})
    }
    getCheck = (id, checked) => {
        const newObj = this.state.todoList
        newObj.map(item => {
            if (item.id === id) {
                return item.done = checked
            } else {
                return item
            }
        })
        this.setState({todoList: newObj})
    }
    getDone=(obj)=>{
        this.setState({todoList: obj})

    }
    deleteObj = (id) => {
        const newObj = this.state.todoList.filter(item => {
            return item.id !== id
        })
        this.setState({todoList: newObj})

    }

    render() {
        return (
            <div className="App">
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Head getTodo={this.getTodo}/>
                        <Content getCheck={this.getCheck} delete={this.deleteObj} todos={this.state.todoList}/>
                        <Footer  getDone={this.getDone} todos={this.state.todoList}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
