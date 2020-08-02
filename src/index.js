import React from 'react';
import ReactDOM from 'react-dom';


function Fn()
{
  return <div class="container-fluid" style={{height:100+"vh"}}>
  <div class="d-flex flex-column justify-content-center align-items-center" style={{height:100+"%"}}>
    <div class="d-flex flex-column bg-white rounded p-5" id="element">
      <form action="#" >
        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input class="form-control" id="email" type="text" placeholder="Enter Email" name="email" size="30" required/>
          </div>
        </div>

        <div class="form-group">
          <label for="pwd">Password</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">#</div>
            </div>
            <input class="form-control" id="pwd" type="password" placeholder="Enter Password" name="pwd" required/>
          </div>
        </div>

        <div class="form-group form-check">
          <input class="form-check-input" id="remme" type="checkbox"/>
          <label class="form-check-label" for="remme">Remember Me</label>
        </div>

        <button class="btn btn-success">Submit</button>
        
      </form>
    </div>
  </div>
  </div>
};

const element=<Fn/>

ReactDOM.render(
  element,
  document.getElementById('root')
);
