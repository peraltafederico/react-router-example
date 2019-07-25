import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom'

import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <NavLink to='/' exact>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/courses'>Courses</NavLink>
          </nav>
          <Switch>
            <Route path='/' exact render={() => <h1>Home!</h1>}/>
            <Route path='/users' component={Users}/>
            <Route path='/courses' component={Courses}/>
            <Redirect from='/all-posts' to='/courses'></Redirect>
            <Route render={() => <h1>Page not found!</h1>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
