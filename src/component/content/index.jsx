import React, {Component} from 'react';
import './index.css'

export default class index extends Component {
    state = {
        currentIndex:-1
    }
    handle = (index) => {
        return () => {
            this.setState({currentIndex:index})
        }
    }

    render() {
        const todos = this.props.todos
        return (
            <ul className="todo-main">
                {
                    todos.map((todo,index) => {
                        return (
                            <li    className={this.state.currentIndex === index ? 'active' : ''} onMouseEnter={this.handle(index)} onMouseLeave={this.handle(-1)} key={todo.id}>
                                <label>
                                    <input type="checkbox" defaultChecked={todo.done}/>
                                    <span>{todo.name}</span>
                                </label>
                                <button className="btn btn-danger" style={{display: 'none'}}>删除</button>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
