import React, {Component} from 'react';
import './index.css'

export default class index extends Component {


    render() {
        console.log(this.props)
        return (
            this.props.isFirst ? <h2>欢迎</h2> :
                this.props.isLoading ? <h2>加载中</h2> :
                    this.props.err ? <h2>{ this.props.err}</h2> :
                    <div className="row">
                        {
                            this.props.users.map((item) => {
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
