import React from 'react';
import LoginForm from './LoginForm';
import Register from './Register';
import ReactDOM from 'react-dom';

class Mainpage extends React.Component
{   
    regBut()
    {
        ReactDOM.render(<Register/>,document.getElementById('root'));
    }

    logBut()
    {
        ReactDOM.render(<LoginForm/>,document.getElementById('root'));
    }

  render()
    {
         return (
            <div className='container-fluid' style={{height:"100vh"}}> 
                 <div className='d-flex justify-content-center align-items-center' style={{height:"100%"}}>
                    <div>
                    <button onClick={this.regBut} className="btn btn-primary mr-2">Register</button>
                    <button onClick={this.logBut} className="btn btn-success">Login</button>
                    </div>
                </div>
            </div>
         );
        
    }
}

export default Mainpage;