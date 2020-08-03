import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import LoginForm from './LoginForm';


ReactDOM.render(
 <LoginForm Clock1={<Clock/>}/>,
  document.getElementById('root')
);
