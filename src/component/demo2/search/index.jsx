import React, {Component} from 'react';
import './index.css'
import axios from "axios";

export default class index extends Component {

    search = () => {
        const {value} = this.inputValue
        this.props.updateState({isFirst: false,isLoading: true})
        axios.get('https://api.github.com/search/users?q=' + value, {}).then(
            res => {
                if(res){
                    this.props.updateState({isFirst: false,isLoading: false,users: res.data.items})
                }
            },
            error => {
                this.props.updateState({isLoading: false,err:error.toString()})
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
