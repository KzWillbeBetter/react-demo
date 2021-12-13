import React, {Component} from 'react';


export default class index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.location.state)
        //接受param参数
        const {id,msg}=this.props.location.state
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