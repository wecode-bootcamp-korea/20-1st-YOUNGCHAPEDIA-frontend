import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Footer from './pages/CommonComponents/Footer';
// import login
// import mypage
import Navbar from './pages/CommonComponents/Navbar';
import MovieDetail from './pages/MovieDetail/MovieDetail';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          {/* <Route exact path="/contents" component={}></Route> */}
          {/* <Route exact path="/myPage" component={}></Route> */}
          {/* <Route exact path="/movieDetail" component={MovieDetail}></Route> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
