import React, {Component} from 'react';
import './index.css'
import PubSub from 'pubsub-js'

export default class index extends Component {

    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }

    componentDidMount() {
        //当有人发布这个
        this.token = PubSub.subscribe('user', (msg, data) => {
            this.setState(data)
        })
    }

    componentWillUnmount() {
       PubSub.unsubscribe(this.token)

    }

    render() {

        return (
            this.state.isFirst ? <h2>欢迎</h2> :
                this.state.isLoading ? <h2>加载中</h2> :
                    this.state.err ? <h2>{this.state.err}</h2> :
                        <div className="row">
                            {
                                this.state.users.map((item) => {
                                    return (
                                        <div key={item.id} className="card">
                                            <a href="https://github.com/reactjs">
                                                <img src={item.avatar_url} style={{width: 100 + 'px'}}/>
                                            </a>
                                            <p className="card-text">{item.login}</p>
                                        </div>
                                    )

                                })


                            }

                        </div>
        )
    }
}
