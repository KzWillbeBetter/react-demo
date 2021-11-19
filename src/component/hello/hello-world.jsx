import React, {Component} from 'react';
import './hello.css'
import axios from "axios";
export default class HelloWorld extends Component {
    
    
    http = () =>{
        axios.get('http://localhost:3000/api/students').then(res => {
            console.log('成功', res.data )
        }, err => {
            console.log('失败', err)
        })
    }
    render() {
        return (
            <div>
                <h1>hello world</h1>
                <button onClick={this.http}>发送</button>
            </div>
        )
    }
}
