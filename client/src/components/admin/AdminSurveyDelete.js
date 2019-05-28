import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchSurvey, adminDeleteSurvey } from "../../actions";

class AdminSurveyDelete extends React.Component {
  componentDidMount() {
    this.props.fetchSurvey(this.props.match.params.id);
    console.log(this.props);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.adminDeleteSurvey(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.survey) {
      return "Are you sure you want to delete this survey?";
    }

    return `Are you sure you want to delete the survey with title: ${
      this.props.survey.student
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Survey"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/adminDashboard")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { survey: state.surveys[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchSurvey, adminDeleteSurvey }
)(AdminSurveyDelete);
