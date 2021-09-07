import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <>
            <div className="container-fluid top-container">
                <div className="row mid-container ">
                    <div className="col-md-5 p-0">
                    <img className="login-img" src="/assets/images/image1.jpg" alt="" />
                    </div>
                    <div className="col-md-7  d-flex justify-content-center flex-column align-items-center">
                        <h4 className="mb-5">Log in</h4>
                    <form className="align-items-center">
        <div className="form-group">
       
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
         
        </div>
        <div className="form-group">
          
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-success d-block w-100 ">Submit</button>
      </form>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
