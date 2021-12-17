import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <NavLink {...this.props}/><br/>
            </div>
        )
    }
}
