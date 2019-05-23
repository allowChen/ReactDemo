import React, {Component} from 'react'

import './all.css'

class All extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            all: props.con
        }
    }

    structure() {
        const all = this.state.all
        return all.map((item, index)=>{
            return (
                <div className='all-con' key={index}  style={{height: item.title?null:'478px'}}>
                    <h3>{item.title}</h3>
                    <ul>
                        {item.con.map((desc, num)=>{
                            return (
                                <li key={num}>{desc}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='all'>
                <div className='title'>{this.state.title}</div>
                {this.structure()}
            </div>
        )
    }
}
export default All