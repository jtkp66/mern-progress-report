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

  componentWillUnmount() {
    this.player.destroy();
  }

  render() {
    if (!this.props.survey) {
      return <div>Loading...</div>;
    }

    const {
      date,
      coordinator,
      student,
      host,
      engname,
      q1,
      q1a,
      q2,
      q3,
      q4,
      q4a,
      q4b,
      q5,
      q5a,
      q6,
      q6a,
      q6b,
      q7,
      q7a,
      q7b,
      q8
    } = this.props.survey;

    return (
      <div>
        <h3>Edit A Stream</h3>
        <SurveyForm
          initialValues={_.pick(
            this.props.survey,
            "date",
            "coordinator",
            "student",
            "host",
            "engname",
            "q1",
            "q1a",
            "q2",
            "q3",
            "q4",
            "q4a",
            "q4b",
            "q5",
            "q5a",
            "q6",
            "q6a",
            "q6b",
            "q7",
            "q7a",
            "q7b",
            "q8"
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
