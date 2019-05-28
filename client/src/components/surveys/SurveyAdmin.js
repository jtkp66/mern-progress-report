import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import AdminList from "./AdminList";
import { fetchAllSurveys } from "../../actions/index";

const SurveyAdmin = ({ fetchAllSurveys, survey: { surveys, loading } }) => {
  useEffect(() => {
    fetchAllSurveys();
  }, [fetchAllSurveys]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">surveys</h1>
      <div className="surveys">
        {surveys.map(survey => (
          <AdminList key={survey._id} survey={survey} />
        ))}
      </div>
    </Fragment>
  );
};

SurveyAdmin.propTypes = {
  fetchAllSurveys: PropTypes.func.isRequired,
  survey: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  survey: state.survey
});

export default connect(
  mapStateToProps,
  { fetchAllSurveys }
)(SurveyAdmin);
