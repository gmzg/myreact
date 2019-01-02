import React, { Component} from 'react'
import {Home,Search} from "pages/homes"
import Listpage from './listpages/Listpage'
import { Route, Switch,Redirect} from "react-router-dom"
class App extends Component {
  render(){
    return (
      <Switch>
        <Redirect from="/" exact to="/home"></Redirect>
        <Route path="/home" render={props=><Home {...props}/>}></Route>
        <Route path="/search" render={props=><Search {...props}/>}></Route>
        <Route path="/list" component={Listpage}></Route>
      </Switch>
      // render={props=><Listpage {...props}/>
    )
  }
}

export default App