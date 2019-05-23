import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import SurveyForm from "./SurveyForm";
import { fetchSurvey, editSurvey } from "../../actions";

class SurveyEdit extends Component {
  componentDidMount() {
    this.props.fetchSurvey(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editSurvey(this.props.match.params.id, formValues);
  };

  render() {
    console.log(this.props);
    if (!this.props.survey) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Survey</h3>
        <SurveyForm
          initialValues={_.pick(
            this.props.survey,
            "coordinator",
            "student",
            "hostfamily",
            "englishname",
            "question1",
            "question2",
            "question3"
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return { survey: state.surveys[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchSurvey, editSurvey }
)(SurveyEdit);
