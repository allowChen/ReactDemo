import React, {Component} from 'react';
import MHead from './header/Head'
import MBody from './body/Body'
import MFoot from './footer/Foot'
import {HashRouter, Route, Redirect} from 'react-router-dom'
import MyMain from '../detail/my-main/my-main'

import './home.css'

class Home extends Component {
    // constructor(props){
    //     super (props)
    // }
    render() {
        return (
            <div className='home'>
                <MHead/>
                <div className='main'>
                    <HashRouter>
                        <Route exact path="/" render={() => <Redirect to='/home'/>}/>
                        <Route path='/home' component={MBody}/>
                        <Route path='/detail' component={MyMain}/>
                    </HashRouter>
                </div>
                <MFoot/>
            </div>
        )
    }
}

export default Home