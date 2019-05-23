import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import SurveyForm from "./SurveyForm";

import { fetchSurvey } from "../../actions";

class SurveyShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchSurvey(id);
  }

  render() {
    if (!this.props.survey) {
      return <div>Loading...</div>;
    }

    // const {
    //   date,
    //   coordinator,
    //   student,
    //   hostfamily,
    //   englishname,
    //   question1,
    //   question2,
    //   question3
    // } = this.props.survey;

    return (
      <div>
        <h3>Edit A Stream</h3>
        <SurveyForm
          initialValues={_.pick(
            this.props.survey,
            "date",
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
  return { survey: state.surveys[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchSurvey }
)(SurveyShow);
