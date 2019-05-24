import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  // renderSurveys() {
  //   return this.props.surveys.map(survey => {
  //     return (
  //       <div className="card blue-grey darken-1" key={survey._id}>
  //         <div className="card-content white-text ml-2 mt-2">
  //           <span className="card-title text-danger">
  //             Coordinator: {survey.coordinator}
  //           </span>
  //           <p className="text-primary mt-2">Sudent: {survey.host}</p>
  //           <p className="right">
  //             Sent On: {new Date(survey.date).toLocaleDateString()}
  //           </p>
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  renderAdminButtons(survey) {
    if (survey.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link
            to={`/surveys/edit/${survey.id}`}
            className="ui inverted secondary button"
          >
            Edit
          </Link>
          <Link to={`/surveys/delete/${survey.id}`} className="small ui button">
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="item" key={survey._id}>
          {this.renderAdminButtons(survey)}
          <i className="large middle aligned icon file" />
          <div className="content">
            <Link to={`/surveys/edit/${survey._id}`} className="header">
              Coordinator - {survey.coordinator}
            </Link>
            <div className="description">Student - {survey.host}</div>
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
