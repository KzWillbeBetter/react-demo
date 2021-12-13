import React, {Component} from 'react';


export default class index extends Component {
    constructor(props) {
        super(props);
        this.state={ }
    }

    render() {
        console.log(this.props.location.search)
        //接受param参数
        // const {id,msg}=this.props.location.state
        return (
            <div>
                <ul>
                    {/*<li>{id}</li>*/}
                    {/*<li>{msg}</li>*/}
                </ul>
            </div>
        )
    }
}