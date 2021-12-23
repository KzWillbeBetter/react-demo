import React, {Component} from 'react';
import {Button, Select} from 'antd';
import '../../App.css'

const {Option} = Select;

export default class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            temp:1
        };
    }

    handleChange=(value)=> {
        this.setState({temp: parseInt(value)})
    }

    increment = () => {
        this.setState({count: this.state.count + this.state.temp})
    }
    decrement = () => {
        this.setState({count: this.state.count - this.state.temp})
    }
    addOfOdd = () => {
        if (this.state.num % 2 !== 0) {
            this.setState({count: this.state.count + this.state.temp})
        }
    }
    addAsync = () => {
         setTimeout( ()=>{
             this.setState({count: this.state.count + this.state.temp})
         },2000)
    }

    render() {
        return (
            <div className={`flex space`}>
                <div className={`space size`}>当前求和为：{this.state.count}</div>
                <div className={`space`}>
                    <Select defaultValue="1" style={{width: 120}} onChange={this.handleChange}>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                    </Select>
                </div>
                <Button onClick={this.increment} className={`space`} type="primary">+</Button>
                <Button onClick={this.decrement} className={`space`} type="primary">-</Button>
                <Button onClick={this.addOfOdd} className={`space`} type="primary">奇数加</Button>
                <Button onClick={this.addAsync} className={`space`} type="primary">异步加</Button>
            </div>

        )
    }
}
