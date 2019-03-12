import React from 'react';
import logo from '../../img/logo.png';

const AdminValidate = () => {
    return (
        <div>
            <div>
                <div className="row mt-5">
                    <div className="col-md-6 m-auto">
                        <div className="card card-body text-secondary text-center">
                            <img className="mt-4" src={logo} alt="Logo" />
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Admin Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Please Enter Admin Password" />
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="text-center">
                            <a href="/" className="btn btn-sm btn-danger mt-2">Back</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminValidate;
