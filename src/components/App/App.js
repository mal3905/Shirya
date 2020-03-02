import React, { Component } from 'react';
import Landingpage from '../Landingpage/landingpage'
import Header from '../Header/Header'
import Registration from '../Registration/Registration'
import LoginForm from '../LoginForm/LoginForm'
import Dashboard from '../Dashboard/Dashboarad'
import PrivateRoute from '../../routes/Privateroute/Privateroute'
import PublicRoute from '../../routes/Publicroute/Publicroute'
import './App.css';


export class App extends Component {
  state = {hasError : false}

  render() {
    const {hasError} = this.state

    return (

      <div className="App">    
      {hasError && <p>Error has occured, please try again. </p>}

      <PublicRoute path={'/'} component={Landingpage}/>
      <PublicRoute path={'/login'} component={LoginForm}/>
      <PublicRoute path={'/register'} component={Registration}/>
      {/* <PrivateRoute path={'/fitness'} component={Fitness}/> */}
      {/* <PrivateRoute path={'/'} component={}/> */}
      </div>
    );
  }
}

export default App
