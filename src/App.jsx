import React, {Component} from 'react';
import './App.css';
import {Button} from "antd";
import {DatePicker} from 'antd';
import {WechatOutlined} from '@ant-design/icons';

const { RangePicker } = DatePicker;
class App extends Component {

    state = {
        date1: 'new Date()'
    }
    onChange = (date, dateString) => {
        this.setState({date1: dateString})
    }

    render() {
        console.log(this.state)
        return (
            <div className="App">
                <div className="container">
                    <Button type="primary">Primary Button</Button>
                    <DatePicker onChange={this.onChange}/>
                    <RangePicker />
                    <div style={{marginTop: 16}}>{this.state.date1}</div>
                    <WechatOutlined />
                </div>
            </div>
        );
    }
}

export default App;
