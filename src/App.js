import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Birthday from './birthday';
export default class App extends React.Component{
  render(){
    return(
      <div>
        <Switch grid={{xs:12}}>
        <Route exact path="/"  component={Birthday}></Route>
        <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}
