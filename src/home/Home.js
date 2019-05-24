import React, {Component} from 'react';
import MHead from './header/Head'
import MBody from './body/Body'
import MFoot from './footer/Foot'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import MyMain from '../detail/my-main/my-main'

import './home.css'

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <MHead/>
                <div className='main'>
                    <Switch>
                        <Route path='/home' component={MBody}/>
                        <Route path='/detail' component={MyMain}/>
                        <Redirect to='/home'/>
                    </Switch>
                </div>
                <MFoot/>
            </div>
        )
    }
}

export default withRouter(Home)