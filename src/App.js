import React, { Component } from "react";
import HomePage from './containers/HomePage/HomePage'
import SignUp from './containers/SignUp/SignUp'
import SignIn from './containers/SignIn/SignIn'
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {

  componentDidMount() {

  }

  render() {
    let routes;

    routes = (

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
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
