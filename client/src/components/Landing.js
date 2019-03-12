import React from "react";
import logo from '../img/logo.png';

const Landing = () => {
    return (
        <div>
            <div class="row mt-5">
                <div class="col-md-6 m-auto">
                    <div class="card card-body text-danger text-center">
                        <img className="mt-4" src={logo} alt="Logo" />
                        <p class="text-dark">Please Select A Role</p>
                        <a href="/admin/validate" class="btn btn-primary btn-block mb-2">Admin</a>
                        <a href="/coordinators/login" class="btn btn-danger btn-block">Coordinator</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
