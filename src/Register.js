import React from 'react';
import Eye from './Eye.png';  
class Register extends React.Component
{   render()
    {
         return (
            
            <div className="container-fluid" style={{height:"95vh"}}>
              <div className="d-flex flex-column justify-content-center align-items-center" style={{height:100+"%"}}>
                <div className="d-flex flex-column bg-white rounded p-5">
                  <form action="#" >
                    {/* First Name & Last Name Part */}
                    <div className="d-flex justify-content-between">
                        <div className="form-group">
                          <label htmlFor="fname">First Name</label>
                          <input className="form-control" type='text' name="fname" id='fname' size="20" placeholder="First name"  autoFocus required/>
                        </div>

                        <div className="form-group ">
                          <label htmlFor="lname">Last Name</label>
                          <input className="form-control" type='text' name="lname" id='lname' size="20" placeholder="Last name" required/>
                        </div>
                    </div>
                    {/* Username */}
                    <div className="form-group">
                      <label htmlFor="uname">Username</label>
                        <input className="form-control" id="uname" type="text" placeholder="Username" name="uname" size="50" required  autoComplete="off"/>
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
                        <div>
                            <div className="input-group-text">
                              <a className="text-dark">
                                  <img height="20px" width="20px" src={Eye} alt="eye"></img>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>

                    {/* Checkbox */}
                    <div className="form-group form-check">
                      <input className="form-check-input" id="remme" type="checkbox" required/>
                      <label className="form-check-label" htmlFor="remme">I agree to terms and conditions.</label>
                    </div>
                    {/* Register Button */}
                    <div classnName="form-group">
                    <button className="btn btn-success">Register</button>
                    </div>
                    
                  </form>
                </div>  
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <h6><a className="badge badge-pill badge-primary" href="https://www.google.com/" target="__blank">Inspired By Google</a></h6>
              </div>
            </div>
         );
        
    }
}

export default Register;