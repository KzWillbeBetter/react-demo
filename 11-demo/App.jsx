import React, {Component} from 'react';
import './App.css';
import {Button} from "antd";
import {DatePicker} from 'antd';
import {WechatOutlined} from '@ant-design/icons';
import PubSub from "pubsub-js";
import axios from "axios";

const {RangePicker} = DatePicker;

class App extends Component {

    state = {
        date1: 'new Date()',
        data: {
            a: 1,
            b: {
                b1: 2,
                b2: 21,
                b3: '',
            }
        }
    }
    start = async () => {
        // const response = await axios.get('https://api.github.com/search/users?q=' + 'kz', {})
        // const data = await response
        // console.log(data)
        this.printObj(this.state.data)
        // for (let k in this.state.data) {
        //     console.log(this.state.data[k])
        // }
    }
    printObj = (obj) => {
        //判断说明是数据类型
        // if (typeof obj != "object") {//判断说明不是对象
        //     return obj
        // }
        for (let k in obj) {//遍历对象和数组
            console.log(k + "\t" + obj[k]);//在控制台输出
            if(obj[k]===''){
                console.log('error')
            }
            if (typeof obj[k] == "object") {//判断说明如果是对象则递归
                this.printObj(obj[k])
            }
        }
    }

    render() {
        // console.log(this.state)
        return (
            <div className="App">
                <div className="container">
                    <Button onClick={this.start} type="primary">Primary Button</Button>
                    {/*<DatePicker />*/}
                    {/*<RangePicker />*/}
                    {/*<div style={{marginTop: 16}}>{this.state.date1}</div>*/}
                    {/*<WechatOutlined />*/}
                </div>
            </div>
        );
    }
}

export default App;
