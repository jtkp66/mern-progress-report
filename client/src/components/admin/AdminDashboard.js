import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { fetchAllSurveys } from "../../actions/index";
import AdminList from "../admin/AdminList";

const AdminDashboard = ({ fetchAllSurveys, surveys: { surveys, loading } }) => {
  useEffect(() => {
    fetchAllSurveys();
  }, [fetchAllSurveys]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div>
        <div className="fixed-action-btn">
          <AdminList key={surveys.id} />
        </div>
      </div>
    </Fragment>
  );
};

AdminDashboard.propTypes = {
  fetchAllSurveys: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  surveys: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  surveys: state.surveys
});

export default connect(
  mapStateToProps,
  { fetchAllSurveys }
)(AdminDashboard);
