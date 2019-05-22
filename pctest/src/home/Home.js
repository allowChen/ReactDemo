import React from 'react';
import MHead from './header/Head'
import { HashRouter } from 'react-router-dom'
// import {Header, }

class Home extends React.Component{
    // constructor(props){
    //     super (props)
    // }
    render(){
        return (
            <div>
                <MHead />
                <HashRouter>
                </HashRouter>
            </div>
        )
    }
}
export default Home