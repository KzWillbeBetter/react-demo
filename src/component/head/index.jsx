import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import './index.css'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    upEnter = (event) => {
        if (event.key !== 'Enter')
            return;
        if (event.target.value === '')
            return;
        const data = {id: uuidv4(), name: event.target.value, done: false}
        this.props.getTodo(data)
    }

    render() {

        return (
            <div className="todo-header">
                <input onKeyUp={this.upEnter} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
