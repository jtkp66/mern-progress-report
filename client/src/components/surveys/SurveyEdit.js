import React, { Component } from "react";
import { connect } from "react-redux";
import SurveyForm from "./SurveyForm";
import { fetchSurvey, editSurvey } from "../../actions";

class SurveyEdit extends Component {
  componentDidMount() {
    this.props.fetchSurvey(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    if (!this.props.survey) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit A Survey</h3>
        <SurveyForm
          initialValues={this.props.survey}
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
