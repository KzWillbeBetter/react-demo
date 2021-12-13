import React, {Component} from 'react';
import Detail from './Detail/index'
import {Link, Redirect, Route} from "react-router-dom";

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

    render() {
        return (
            <div>
                <div>messages内容</div>
                <div className={'border'}>
                    <ul>
                        {
                            this.state.messageList.map(item => {
                                return (
                                    <li key={item.id}><Link to={'/home/messages/detail/'+item.msg}>{item.msg}组件传值</Link></li>
                                )
                            })
                        }
                    </ul>
                    <div className={'border'}>
                        {/*注册路由*/}
                        <Route path='/home/messages/detail/:msg' component={Detail}/>
                        <Redirect to={'/home/messages/detail'}/>
                    </div>
                </div>
            </div>

        )
    }
}