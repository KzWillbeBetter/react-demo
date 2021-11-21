import React, {Component} from 'react';
import './index.css'
import axios from "axios";

export default class index extends Component {

    state={users:[]}
    search = () => {
        const {value} = this.inputValue
        console.log(value)
        axios.get('https://api.github.com/search/users?q=' + value, {}).then(
            res => {
                this.setState({users:res.data.items})
                this.props.getUser(this.state.users)
            },
            error => {
                console.log(error)
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
