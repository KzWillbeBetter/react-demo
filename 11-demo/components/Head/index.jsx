import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    back = () => {
        this.props.history.goBack()
    }
    forWord = () => {
        this.props.history.goForward()

    }

    render() {
        console.log(this.props)

        return (
            <div>header===》
                <button onClick={this.back}>back</button>
                <button onClick={this.forWord}>goForWard</button>
            </div>
        )
    }
}

//一般组件用withRouter
export default withRouter(Header)
