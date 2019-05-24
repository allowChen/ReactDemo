import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'


import './links.css'

class Linker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            link: props.con
        }
    }

    render() {
        let link = this.state.link
        return (
            <div className='links'>
                <div className='link-img'><img src={link.img} alt=""/></div>
                <div className='link-con'>
                    <h2>{link.title}</h2>
                    <p>{link.con}</p>
                    <button onClick={() => this.props.history.push('/detail?flag=' + this.props.index)}>立即购买</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Linker)