import React, { Component } from "react";
import { connect } from "react-redux";
import { createSurvey } from "../../actions";
import SurveyForm from "./SurveyForm";

class SurveyCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    console.log(meta);
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
    this.props.createSurvey(formValues);
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <h3 className="text-danger">MONTHLY PROGRESS REPORT</h3>
        <SurveyForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createSurvey }
)(SurveyCreate);
