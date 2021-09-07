import React from 'react'
import './Signup.css'
const Signup = () => {
    return (
        <>
            <div className="container-fluid top-container ">
                <div className="row mid-container ">
                    <div className="col-md-6 py-3 d-flex justify-content-center flex-column align-items-center">
                        <h4 className="mb-5">Sign up</h4>
                        <form className="">
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" />
                            </div>

                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your phone number" />
                            </div>

                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>

                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder=" Confirm Password" />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-success d-block w-100">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6 p-0">
                        <img className="signup-img" src="/assets/images/image6.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
