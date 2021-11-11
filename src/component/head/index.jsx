import React, {Component} from 'react';
import './index.css'
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    keyUp=(event)=>{
        console.log(event.target.value)
    }
    render() {
        return (
                <div className="todo-header">
                    <input onKeyUp={this.keyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                </div>
        )
    }
}
