import React, {Component} from 'react';
import './index.css'

export default class index extends Component {
    state = {
        currentIndex: -1
    }
    handle = (index) => {
        return () => {
            this.setState({currentIndex: index})
        }
    }
    handleCheck = (id) => {
        return (event) => {
            this.props.getCheck(id, event.target.checked)
        }
    }
    delete = (id) => {
        return () => {
            this.props.delete(id)
        }
    }

    render() {
        const todos = this.props.todos
        return (
            <ul className="todo-main">
                {
                    todos.map((todo, index) => {
                        return (
                            <li className={this.state.currentIndex === index ? 'active' : ''}
                                onMouseEnter={this.handle(index)} onMouseLeave={this.handle(-1)} key={todo.id}>
                                <label>
                                    <input type="checkbox" checked={todo.done}
                                           onChange={this.handleCheck(todo.id)}/>
                                    <span>{todo.name}</span>
                                </label>
                                <div className={this.state.currentIndex === index ? 'show' : 'none'}>
                                    <button onClick={this.delete(todo.id)} className="btn btn-danger">删除</button>

                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
