import React from 'react';
import logo from '../../img/logo.png';

const AdminLogin = () => {
    return (
        <div>
            <div class="row mt-5">
                <div class="col-md-6 m-auto">
                    <div class="card card-body text-danger text-center">
                        <img className="mt-4" src={logo} alt="Logo" />
                        <p class="text-dark">Create an account or login</p>
                        <a href="/users/register" class="btn btn-primary btn-block mb-2">Register</a>
                        <a href="/users/login" class="btn btn-danger btn-block">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
