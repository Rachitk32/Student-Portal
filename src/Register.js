import React from 'react';

class Register extends React.Component
{   render()
    {
         return (
            
            <div className="container-fluid" style={{height:"100vh"}}>
              <div className="d-flex flex-column justify-content-center align-items-center" style={{height:100+"%"}}>
                <div className="d-flex flex-column bg-white rounded p-5">
                  <form action="#" >
                    {/* First Name & Last Name Part */}
                    <div className="d-flex justify-content-between" style={{height:""}}>
                        <div className="form-group">
                          <label htmlFor="fname">First Name</label>
                          <input className="form-control" type='text' name="fname" id='fname' size="20" placeholder="First name" required/>
                        </div>

                        <div className="form-group ">
                          <label htmlFor="lname">Last Name</label>
                          <input className="form-control" type='text' name="lname" id='lname' size="20" placeholder="Last name" required/>
                        </div>
                    </div>
                    {/* Username */}
                    <div className="form-group">
                      <label htmlFor="uname">Username</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">@</div>
                        </div>
                        <input className="form-control" id="uname" type="text" placeholder="Username" name="uname" size="45" required autoFocus autoComplete="off"/>
                      </div>
                    </div>
                    {/* Password and confirm password  and Eye*/}
                    <div class="d-flex justify-content-between">

                      <div className="form-group">
                        <label htmlFor="pwd">Password</label>
                        <input className="form-control" id="pwd" type="password" placeholder="Password" size="15" name="pwd" required/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="cpwd">Confirm</label>
                        <div className="input-group">
                        <input className="form-control mr-sm-3 rounded" id="cpwd" type="password" placeholder="Confirm" size="15" name="cpwd" required/>
                        <div className="input-group-append input-group-prepend">
                            <div className="input-group-text">
                              <a href="#" className="text-dark">
                              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye-slash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829z"/>
                                <path fill-rule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z"/>
                              </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>

                    {/* Checkbox */}
                    <div className="form-group form-check">
                      <input className="form-check-input" id="remme" type="checkbox" required/>
                      <label className="form-check-label" htmlFor="remme">I agree to let you guys fuck me.</label>
                    </div>
                    {/* Register Button */}
                    <div classnName="form-group">
                    <button className="btn btn-success">Register</button>
                    </div>
                    
                  </form>
                </div>
              </div>
            </div>
         );
        
    }
}

export default Register;