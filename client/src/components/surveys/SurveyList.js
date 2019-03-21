import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card blue-grey darken-1" key={survey._id}>
          <div className="card-content white-text">
            <span className="card-title">{survey.coordinator}</span>
            <p>{survey.host}</p>
            <p className="right">
              Sent On: {new Date(survey.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      );
    });
  }

  renderList() {
    return this.props.surveys.map(survey => {
      return (
        <div className="item" key={survey._id}>
          <i className="large middle aligned icon file" />
          <div className="content">
            <Link to={`/surveys/${survey.coordinator}`} className="header">
              {survey.coordinator}
            </Link>
            <div className="description">{survey.host}</div>
            <p className="right">
              Sent On: {new Date(survey.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Surveys</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    surveys: Object.values(state.surveys)
  };
};

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
