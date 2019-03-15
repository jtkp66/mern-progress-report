import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Landing from "./Landing";
import CoordinatorLogin from "./coordinators/CoordinatorLogin";
import AdminValidate from "./admin/AdminValidate";
import AdminLogin from "./admin/AdminLogin";

import SurveyCreate from "./surveys/SurveyCreate";
import SurveyEdit from "./surveys/SurveyEdit";
import SurveyDelete from "./surveys/SurveyDelete";
import SurveyList from "./surveys/SurveyList";
import SurveyShow from "./surveys/SurveyShow";
import history from "../history";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route exact={true} path="/" component={Landing} />
              <Route exact path="/surveys" component={SurveyList} />
              <Route path="/coordinators/login" component={CoordinatorLogin} />
              <Route path="/admin/validate" component={AdminValidate} />
              <Route path="/admin/login" component={AdminLogin} />
              <Route path="/surveys/new" exact component={SurveyCreate} />
              <Route path="/surveys/edit/:id" exact component={SurveyEdit} />
              <Route
                path="/surveys/delete/:id"
                exact
                component={SurveyDelete}
              />
              <Route path="/surveys/:id" exact component={SurveyShow} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
