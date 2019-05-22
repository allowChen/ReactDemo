import React from 'react';
import Logo from '../../logo.svg'
import './head.less'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            logon: ['登录','注册','关于']
        }
    }

    defaultLogon() {
        return  this.state.logon.map((item,index)=>{
            return (
                <li key={index}>{item}</li>
            )
        })
    }

    render() {
        return (
            <div className='header'>
                <div className='head-con'>
                    <div className='head-logo'>
                        <img width='60px' src={Logo} alt=""/>
                    </div>
                    <ul className='logon'>{this.defaultLogon()}</ul>
                </div>
            </div>
        )
    }
}

export default Header