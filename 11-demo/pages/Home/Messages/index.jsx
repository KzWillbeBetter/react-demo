import React, {Component} from 'react';
import Detail from './Detail/index'
import {Link, Route} from "react-router-dom";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageList: [
                {id: 1, name: 'kz', msg: '消息'},
                {id: 2, name: 'zk', msg: 'DAS'},
            ]
        };
    }

    show = (msg, id) => {
        //不留痕迹
        this.props.history.replace(`/home/messages/detail/${msg}/${id}`)
    }
    pushShow = (msg, id) => {
        //留痕迹
        this.props.history.push(`/home/messages/detail/${msg}/${id}`)
    }
    // goForWord前进 goBack后退
    render() {
        return (
            <div>
                <div>messages内容</div>
                <div className={'border'}>
                    <ul>
                        {
                            this.state.messageList.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <li>
                                            <Link
                                                to={`/home/messages/detail/${item.id}/${item.msg}`}>{item.msg}</Link>
                                        </li>
                                        <button onClick={() => this.pushShow(item.id, item.msg)}>push查看</button>
                                        <button onClick={() => this.show(item.id, item.msg)}>replace查看</button>
                                    </div>
                                )
                            })
                        }
                    </ul>
                    <div className={'border'}>
                        {/*注册路由*/}
                        <Route path='/home/messages/detail/:id/:title' component={Detail}/>
                        {/*<Redirect to={'/home/messages/detail'}/>*/}
                    </div>
                </div>
            </div>

        )
    }
}
