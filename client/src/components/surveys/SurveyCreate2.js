import React, { Component } from "react";
import { connect } from "react-redux";
import { createSurvey } from "../../actions";
import SurveyForm2 from "./SurveyForm2";

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class SurveyCreate2 extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
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
        <div className="text-primary">
          <Pagination aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink className="text-info" href="/surveys/new">
                Student MPR
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="text-info" href="/surveys/hostmpr">
                Host Family MPR
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className="text-info"
                href="/surveys/coordinatormpr"
              >
                School MPR
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </div>
        <h3 className="text-danger">MONTHLY PROGRESS REPORT</h3>
        <SurveyForm2 onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createSurvey }
)(SurveyCreate2);
