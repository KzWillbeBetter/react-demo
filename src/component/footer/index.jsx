import React, {Component} from 'react';
import './index.css'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    checkAll = (event) => {
        if (event.target.checked) {
            this.props.todos.map(item => {
                return item.done = true
            })
            this.props.getDone(this.props.todos)

        } else {
            this.props.todos.map(item => {
                return item.done = false
            })
            this.props.getDone(this.props.todos)
        }

        return this.props.todos.every(item => {
            return item.done === true
        })
    }
    clearAll = () => {
        const newObj = this.props.todos.filter(item => {
            return item.done === false
        })
        this.props.getDone(newObj)
    }

    render() {
        const todos = this.props.todos
        const sum = todos.reduce((pre, todo) => {
            return pre + (todo.done ? 1 : 0)
        }, 0)

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.checkAll} checked={sum === todos.length && sum !== 0}/>
                </label>
                <span>
          <span>已完成{sum}</span> / 全部{todos.length}
        </span>
                <button onClick={this.clearAll} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
