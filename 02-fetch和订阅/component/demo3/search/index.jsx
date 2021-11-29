import React, {Component} from 'react';
import './index.css'
import axios from "axios";
import PubSub from 'pubsub-js'

export default class index extends Component {

    search = async () => {
        const {value} = this.inputValue
        PubSub.publish('user', {users: [], isFirst: false, isLoading: true, err: ''})
        try {
            const response = await fetch('/api2/users2?q=' + value)
            const data = await response.json()
            PubSub.publish('user', {isFirst: false, isLoading: false, users: data.items})
        } catch (error) {
            console.log('请求出错', error)
            PubSub.publish('user', {isFirst: false, isLoading: false,users: [], err:error.message})
        }

        // axios.get('/api/search/users2?q=' + value, {}).then(
        // fetch('/api2/users2?q=' + value).then(
        //     res => {
        //         if (res) {
        //             console.log('联系服务器成功了', res)
        //             return res.json()
        //         }
        //     }
        // ).then(
        //     res => {
        //         console.log('获取数据成功', res)
        //     }
        // ).catch((err)=>{
        //     console.log('获取数据失败',err)
        // })
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.inputValue = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
