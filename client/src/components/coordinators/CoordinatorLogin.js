import React, { Component } from 'react';
import logo from '../../img/logo.png';

class CoordinatorLogin extends Component {
    render() {
        return (
            <div>
                <div className="row mt-5">
                    <div className="col-md-6 m-auto">
                        <div className="card card-body text-danger text-center">
                            <img className="mt-4" src={logo} alt="Logo" />
                            <p className="text-dark">Create a Coordinator account or login</p>
                            <a href="/coordinators/register" className="btn btn-outline-primary btn-block mb-2">Register</a>
                            <a href="/coordinators/login" className="btn btn-outline-danger btn-block">Login</a>
                        </div>
                        <div className="text-center">
                        <a href="/" className="btn btn-sm btn-danger mt-2">Back</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoordinatorLogin;
