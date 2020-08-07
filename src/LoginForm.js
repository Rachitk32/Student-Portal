import React from 'react';
import ReactDOM from 'react-dom';
class LoginForm extends React.Component
{   
  constructor(props)
  {
    super(props);
    this.submitHandle=this.submitHandle.bind(this);
  }
  submitHandle()
  {
    const element=
    (
        <div class="d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}}>
        <div class="d-flex flex-column">  
            <div className="display-1 text-white">
               You will be fucked in both holes today.
            </div>
        </div>
        </div>
    );

    ReactDOM.render(element,document.getElementById('root'));

  }

  render()
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
                        <input className="form-control" id="email" type="text" placeholder="Enter Email" name="email" size="30"  autoFocus autoComplete="on" required/>
                      </div>
                    </div>
            
                    <div className="form-group">
                      <label htmlFor="pwd">Password</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">#</div>
                        </div>
                        <input className="form-control" id="pwd" type="password" placeholder="Enter Password" name="pwd" required />
                      </div>
                    </div>
            
                    <div className="form-group form-check">
                      <input className="form-check-input" id="remme" type="checkbox" required />
                      <label className="form-check-label" htmlFor="remme">Fuck Me Hard!!</label>
                    </div>
            
                    <button  onClick={this.submitHandle} className="btn btn-success">Submit</button>
                    
                  </form>
                </div>
              </div>
            </div>
         );
        
    }
}

export default LoginForm;