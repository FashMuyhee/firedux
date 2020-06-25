import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetail from './components/project/Detail'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import CreateProject from './components/project/Create'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetail} />
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;