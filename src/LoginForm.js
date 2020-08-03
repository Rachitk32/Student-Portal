import React from 'react';

class LoginForm extends React.Component
{   render()
    {
         return (
            <div className="container-fluid" style={{height:"100vh"}}>
              <div className="d-flex flex-column justify-content-center align-items-center" style={{height:100+"%"}}>
                <div className="d-flex flex-column bg-white rounded p-5" id="element">
                  <form action="#" >
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">@</div>
                        </div>
                        <input className="form-control" id="email" type="text" placeholder="Enter Email" name="email" size="30" required autoFocus autoComplete="off"/>
                      </div>
                    </div>
            
                    <div className="form-group">
                      <label htmlFor="pwd">Password</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">#</div>
                        </div>
                        <input className="form-control" id="pwd" type="password" placeholder="Enter Password" name="pwd" required/>
                      </div>
                    </div>
            
                    <div className="form-group form-check">
                      <input className="form-check-input" id="remme" type="checkbox" required/>
                      <label className="form-check-label" htmlFor="remme">Fuck Me</label>
                    </div>
            
                    <button className="btn btn-success">Submit</button>
                    
                  </form>
                </div>
              </div>
            </div>
         );
        
    }
}

export default LoginForm;