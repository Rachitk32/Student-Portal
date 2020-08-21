import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Cgpa from './Cgpa';
import Notification from './notification';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/cgpa" component={Cgpa} />
          <Route path="/notification" component={Notification} />
          {/* <Route path="/resources" component={Resources} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
