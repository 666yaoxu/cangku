import React,{Component} from 'react'
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom'
import Admin from '../../Admin'
import Home from '../../home/home'
import City from '../../city/City'
import Game from '../../game/Game'
import Paly from '../../paly/Paly'
import Order from '../../order/order'
import Admin2 from '../../Admin2'
import Order2 from '../../order/order2'
import User from '../../user/User'
import Pic from '../../pic/Pic'
import Bar from '../../bar/Bar'
import Line from '../../line/Line'
import Qita from '../../qita/Qita'

export default class R2 extends Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/admin2" render={()=>(
                        <Admin2>
                            <Route  exact  path="/admin2/order/detail/:id" component={Order2}></Route>
                        </Admin2>
                    )}></Route>
                    <Admin>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/city' component={City}></Route>
                        <Route path='/game' component={Game}></Route>
                        <Route path='/paly' component={Paly}></Route>
                        <Route path='/order' component={Order}></Route>
                        <Route path='/user' component={User}></Route>
                        <Route path='/pic' component={Pic}></Route>
                        <Route path='/bar' component={Bar}></Route>
                        <Route path='/line' component={Line}></Route>
                        <Route path='/qita' component={Qita}></Route>

                    </Admin>
                </Switch>
            </Router>
        )
    }
}