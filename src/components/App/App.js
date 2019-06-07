import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
//main app css required
import './App.css';
//custom css imports
import 'antd/dist/antd.css';
//import dependencies
import { Helmet } from 'react-helmet';
//import helpers
import { history } from "../../helpers";
import PrivateRoute from "../../helpers/privateRoute";
//import utils
import ErrorBoundary from "../Util/ErrorBoundary";
//import Layouts
// import BackGround from "../Layouts/Background"
//import components
import Home from "../Pages"
import Login from "../Pages/Login"
import Servers from "../Pages/Servers"
import DashBoard from "../Pages/Dashboard"

class App extends Component {
  // state = {  }
  render() { 
    return ( 
      <Router history = {history}>
        <div className="App">
        <Helmet><title>Springmon</title></Helmet>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/servers" component={Servers}/>
            <PrivateRoute exact path="/dashboard" component={DashBoard}/>
          </Switch>
        </ErrorBoundary>
        </div>
      </Router>
     );
  }
}
 
export default App;
