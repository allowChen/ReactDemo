import React, {Component} from 'react';
import Logo from '../../images/logo.svg'
import {withRouter} from 'react-router-dom'
import './head.css'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logon: ['登录', '注册', '关于'],
            flag: 'none',
            name: null,
            pass: null
        }
    }

    componentDidMount(){
        document.addEventListener('keydown',(e)=>{
            if (e.key==='Escape') {
                this.close()
            }
        })
    }
    componentWillUnmount() {
        document.removeEventListener('keydown',(e)=>{
            if (e.key==='Escape') {
                this.close()
            }
        })
    }

    modal(index) {
        switch (true) {
            case index === 0:
                if (!this.state.name) {
                    this.logon = function () {
                        return (
                            <div className='m-logon'>
                                <div>
                                    <span>用户名:</span>
                                    <input onChange={(e) => this.setState({name: e.target.value})} type="text"/>
                                </div>
                                <div>
                                    <span>密码:</span>
                                    <input onChange={(e) => this.setState({pass: e.target.value})} type="password"/>
                                </div>
                                <div>
                                    <button onClick={() => this.affirm()}>登录</button>
                                    <button onClick={() => { this.close() }}>取消</button>
                                </div>
                            </div>
                        )
                    }
                    this.setState({flag: 'block'})
                }
                break;
            case index === 1:
                this.logon = function () {
                    if (this.state.name) {
                        this.setState({
                            logon: ['登录', '注册', '关于']
                        })
                        this.close()
                    } else {
                        return (
                            <div className='m-logon'>注册功能维护中。。。</div>
                        )
                    }

                }
                this.setState({flag: 'block'})
                break;
            case index === 2:
                this.logon = function () {
                    return (
                        <div className='m-logon'>关于关于关于关于关于关于关于关于关于关于关于关于</div>
                    )
                }
                this.setState({flag: 'block'})
                break;
            default:
        }
    }

    logon() {
    }

    affirm() {
        if (this.state.name) {
            this.setState({
                logon: [this.state.name, '退出', '关于'],
                flag: 'none'
            })
        }
    }

    close() {
        this.setState({
            name: null,
            pass: null,
            flag: 'none'
        })
    }

    defaultLogon() {
        return this.state.logon.map((item, index) => {
            return (
                <li key={index} onClick={() => this.modal(index)}>{item}</li>
            )
        })
    }

    render() {
        return (
            <div className='header'>
                <div className='head-con'>
                    <div className='head-logo'>
                        <img onClick={()=>this.props.history.push('/home')} src={Logo} alt=""/>
                    </div>
                    <ul className='logon'>{this.defaultLogon()}</ul>
                </div>
                <div className='modal' style={{display: this.state.flag}} ref='keydown'>
                    {this.logon()}
                </div>
            </div>
        )
    }
}

export default withRouter(Header)