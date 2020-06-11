import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage'
import SignUp from './containers/SignUp/SignUp';
import SignIn from './containers/SignIn/SignIn';
import ResetPassword from './containers/ResetPassword/ResetPassword';
import About from './containers/About/About';


import './App.css';

class App extends Component {

  // componentDidMount() {
  // }

  render() {
    let routes;

    routes = (

      <Switch>
        <Route path="/" exact component={HomePage} />

        <Route path="/cadastro" exact component={SignUp} />
        <Route path="/sign-up" exact component={SignUp} />

        <Route path="/login" exact component={SignIn} />
        <Route path="/sign-in" exact component={SignIn} />

        <Route path="/reset-password" exact component={ResetPassword} />
        <Route path="/esqueci-a-senha" exact component={ResetPassword} />

        <Route path="/about" exact component={About} />
        <Route path="/sobre" exact component={About} />


        <Redirect to="/" />
      </Switch>
    )

    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default App;
