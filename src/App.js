import React from 'react';
import Home from './home/Home'
import {HashRouter} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <HashRouter><Home/></HashRouter>
        </div>
    );
}

export default App;
