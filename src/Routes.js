import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Login from './pages/Login-SignIn/Login';
// import mypage
import SignIn from './pages/Login-SignIn/SignIn';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signin" component={SignIn}></Route>
          {/* <Route exact path="/contents" component={}></Route> */}
          {/* <Route exact path="/myPage" component={}></Route> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
