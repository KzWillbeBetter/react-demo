import React, {Component} from 'react';
import './index.css'
export default class index extends Component {


    render() {
        return (
            <div className="row">
                {
                    this.props.users.map((item)=>{
                        return(
                            <div key={item.id} className="card">
                                <a href="https://github.com/reactjs" >
                                    <img src={item.avatar_url}  style={{width: 100+'px'}}/>
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
