import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import MyNavLink from "../../components/MyNavLink";
import Messages from './Messages/index'
import News from './News/index'
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>Home内容</div>
                <div className={'flex'}>
                    <MyNavLink to='/home/messages'>Messages</MyNavLink>
                    <MyNavLink to='/home/news' a={1}>news</MyNavLink>
                </div>
                <div className={'border'}>
                    <Switch>
                        {/*注册路由*/}
                        <Route path='/home/messages' component={Messages}/>
                        <Route path='/home/news' component={News}/>
                        <Redirect to={'/home/messages'}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

