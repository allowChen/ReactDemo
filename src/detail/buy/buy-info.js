import React from 'react'
import './buy-info.css'

class BuyInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: 0,
            arr: []
        }
    }

    handleChlick(num) {
        this.setState({
            flag: num
        })
    }

    render() {
        let flag = this.state.flag
        let obj = this.props.obj;
        if (obj) {
            var length = Object.keys(obj).length
        }
        return (
            <div className="shade-parent" style={{display: this.props.show}}>
                <div className="shade-info">
                    <div className="shade-close" onClick={() => this.props.onClick('none')}>
                        <span>X</span>
                    </div>
                    <div className="shade-content">
                        <table>
                            <tbody>
                            <tr>
                                {obj ? obj.arr.map((el, index) => {
                                    return <td key={index}>{el}</td>
                                }) : null}
                            </tr>
                            <tr>
                                <td>{obj ? obj.count : null}</td>
                                <td>{obj ? obj.medium : null}</td>
                                <td>{obj ? obj.validTime : null}</td>
                                <td style={{display: length === 8 ? null : 'none'}}>{obj ? obj.version : null}</td>
                                <td>{obj ? obj.totalPrice : null}</td>
                            </tr>
                            </tbody>
                        </table>
                        <p className="shade-select">请选择银行</p>
                        <div className="shade-bank">
                            <ul>
                                <li>
                                    <img src={require('../../images/CMBC.png')} alt=""
                                         className={flag === 0 ? 'active' : null} onClick={() => this.handleChlick(0)}/>
                                </li>
                                <li>
                                    <img src={require('../../images/CCB.png')} alt=""
                                         className={flag === 1 ? 'active' : null} onClick={() => this.handleChlick(1)}/>
                                </li>
                                <li>
                                    <img src={require('../../images/SPDB.png')} alt=""
                                         className={flag === 2 ? 'active' : null} onClick={() => this.handleChlick(2)}/>
                                </li>
                                <li>
                                    <img src={require('../../images/SBC.png')} alt=""
                                         className={flag === 3 ? 'active' : null} onClick={() => this.handleChlick(3)}/>
                                </li>
                                <li>
                                    <img src={require('../../images/ICBC.png')} alt=""
                                         className={flag === 4 ? 'active' : null} onClick={() => this.handleChlick(4)}/>
                                </li>
                                <li>
                                    <img src={require('../../images/ABC.png')} alt=""
                                         className={flag === 5 ? 'active' : null} onClick={() => this.handleChlick(5)}/>
                                </li>
                                <li>
                                    <img src={require('../../images/SBC.png')} alt=""
                                         className={flag === 6 ? 'active' : null} onClick={() => this.handleChlick(6)}/>
                                </li>
                                <li>
                                    <img src={require('../../images/CCIB.png')} alt=""
                                         className={flag === 7 ? 'active' : null} onClick={() => this.handleChlick(7)}/>
                                </li>
                            </ul>
                        </div>
                        <button>确认购买</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuyInfo