import React, {Component} from 'react';
import './index.css'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const todos=this.props.todos
        return (
            <ul className="todo-main">
                {
                    todos.map(item=>{
                        return (
                            <li key={item.id}>
                                <label>
                                    <input type="checkbox" defaultChecked={item.done}/>
                                    <span>{item.name}</span>
                                </label>
                                <button className="btn btn-danger" style={{display:"none"}}>删除</button>
                            </li>
                        )
                    })

                }

            </ul>
        )
    }
}
