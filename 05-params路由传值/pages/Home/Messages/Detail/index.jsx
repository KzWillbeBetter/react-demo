import React, {Component} from 'react';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props)
        const {id,msg}=this.props.match.params
        return (
            <div>
                <ul>
                        <li>{id}</li>
                        <li>{msg}</li>
                </ul>
            </div>
        )
    }
}