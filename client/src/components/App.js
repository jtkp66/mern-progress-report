import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from './Landing';
import CoordinatorLogin from './coordinators/CoordinatorLogin';
import AdminValidate from './admin/AdminValidate';
import AdminLogin from './admin/AdminLogin';
const Dashboard = () => <div>hi</div>;



class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="container">
            <Route exact={true} path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/coordinators/login" component={CoordinatorLogin} />
            <Route path="/admin/validate" component={AdminValidate} />
            <Route path="/admin/login" component={AdminLogin} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
