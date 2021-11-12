import React, {Component} from 'react';
import './index.css'

export default class index extends Component {
    state = {
        show: false,
        index:0
    }
    handle = (isShow,index) => {
        return () => {
            console.log(isShow,index)
            this.setState({show: isShow,index:index})
        }
    }

    render() {
        const todos = this.props.todos
        return (
            <ul className="todo-main">
                {
                    todos.map((todo,index) => {
                        return (
                            <li style={{backgroundColor:this.state.show?'grey':'white'}} onMouseEnter={this.handle(true,index)} onMouseLeave={this.handle(false,index)} key={todo.id}>
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
