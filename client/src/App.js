import React, { Fragment, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import { loadAdminUser } from "./actions/adminAuthActions";
import setAuthToken from "./utils/setAuthToken";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/layout/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";

import AdminDashboard from "./components/admin/AdminDashboard";
import AdminRegister from "./components/adminAuth/AdminRegister";
import AdminLogin from "./components/adminAuth/AdminLogin";
import AdminSurveyDelete from "./components/admin/AdminSurveyDelete";
import AdminLanding from "./components/admin/AdminLanding";

import SurveyCreate from "./components/surveys/SurveyCreate";
import SurveyEdit from "./components/surveys/SurveyEdit";
import SurveyList from "./components/surveys/SurveyList";
import SurveyShow from "./components/surveys/SurveyShow";
import SurveyDelete from "./components/surveys/SurveyDelete";
import history from "./history";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadAdminUser());
  }, []);

  return (
    <Provider store={store}>
      <Router history={history}>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/surveys" component={SurveyList} />
              <Route path="/surveys/new" exact component={SurveyCreate} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/surveys/edit/:id" exact component={SurveyEdit} />
              <Route
                path="/surveys/delete/:id"
                exact
                component={SurveyDelete}
              />
              <Route path="/surveys/:id" exact component={SurveyShow} />
              <Route path="/admin/landing" exact component={AdminLanding} />
              <Route path="/admin/dashboard" exact component={AdminDashboard} />
              <Route exact path="/admin/register" component={AdminRegister} />
              <Route exact path="/admin/login" component={AdminLogin} />
              <Route
                path="/surveys/delete/:id"
                exact
                component={AdminSurveyDelete}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
