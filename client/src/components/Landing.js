import React from "react";
import logo from "../img/logo.png";

const Landing = () => {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body text-danger text-center">
            <img className="mt-4" src={logo} alt="Logo" />
            <p className="text-dark">Please Select A Role</p>
            <a
              href="/admin/validate"
              className="btn btn-primary btn-block mb-2"
            >
              Admin
            </a>
            <a href="/coordinators/login" className="btn btn-danger btn-block">
              Coordinator
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
