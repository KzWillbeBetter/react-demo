import React, {Component} from 'react';
import './index.css'
import axios from "axios";
import PubSub from 'pubsub-js'

export default class index extends Component {

    search = () => {
        const {value} = this.inputValue
        PubSub.publish('user',{users:[],isFirst: false,isLoading: true,err:''})
        axios.get('https://api.github.com/search/users?q=' + value, {}).then(
            res => {
                if(res){
                    PubSub.publish('user',{isFirst: false,isLoading: false,users: res.data.items})
                }
            },
            error => {
                PubSub.publish({isLoading: false,err:error.toString()})
            }
        )
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
