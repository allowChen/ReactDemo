import React, {Component} from 'react'
import './links.css'

class Linker extends Component{
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
                    <button>立即购买</button>
                </div>
            </div>
        )
    }
}
export default Linker