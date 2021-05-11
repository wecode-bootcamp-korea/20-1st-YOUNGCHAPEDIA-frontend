import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
// import Footer from './pages/CommonComponents/Footer';
// 원래 모달창으로 되어있지만 확인을 위해...
import Login from './pages/Login-SignIn/Login';
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
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default Routes;
