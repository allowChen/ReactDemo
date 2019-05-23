import React, {Component} from 'react';
import MHead from './header/Head'
import MBody from './body/Body'
import MFoot from './footer/Foot'
import {HashRouter, Route, Redirect} from 'react-router-dom'

import './home.css'

// import {Header, }

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
                        {/*<Route path='/detail' component={}/>*/}
                    </HashRouter>
                </div>
                <MFoot/>
            </div>
        )
    }
}

export default Home