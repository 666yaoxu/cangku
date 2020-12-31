
import {HashRouter as Router,Link,Route} from 'react-router-dom'
import R2 from '../router02/router02'
// import React,{Component} from 'react'

export default class R1 extends Component {
    render(){
        return(
            <Router>
                
                    <Link to='/aa'>tiaoA</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/bb'>tiaoB</Link>
                    <hr/>
                    <Route path='/aa' >aa</Route>
                    <Route path='/bb' >bb</Route>
                
            </Router>
        )
    }
}