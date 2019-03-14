import React from "react";
import logo from "../../img/logo.png";

const AdminLogin = () => {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body text-danger text-center">
            <img className="mt-4" src={logo} alt="Logo" />
            <p className="text-dark">Create an account or login</p>
            <a
              href="/users/register"
              className="btn btn-primary btn-block mb-2"
            >
              Register
            </a>
            <a href="/users/login" className="btn btn-danger btn-block">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
