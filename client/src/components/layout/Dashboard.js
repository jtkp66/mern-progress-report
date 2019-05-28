import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { fetchSurveys } from "../../actions/index";
import SurveyList from "../surveys/SurveyList";

const Dashboard = ({ fetchSurveys, surveys: { surveys, loading } }) => {
  useEffect(() => {
    fetchSurveys();
  }, [fetchSurveys]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div>
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn btn-lg btn-danger slign-right">
            Create Survey
          </Link>
          <SurveyList key={surveys._id} />
        </div>
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  fetchSurveys: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  surveys: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  surveys: state.surveys
});

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(Dashboard);
