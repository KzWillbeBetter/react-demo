import React, {Component} from 'react';
import './index.css'
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search"/>&nbsp;
                    <button>Search</button>
                </div>
            </section>
        )
    }
}
