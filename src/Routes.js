import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Footer from './pages/CommonComponents/Footer';
import Navbar from './pages/CommonComponents/Navbar';
import ReviewPage from './pages/ReviewPage/ReviewPage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import MyPage from './pages/MyPage/MyPage';
import AnalyzeTest from './pages/AnalyzeTest/AnalyzeTest';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/movie" component={Main}></Route>
          <Route exact path="/movie/detail/:id" component={MovieDetail}></Route>
          <Route exact path="/review" component={ReviewPage}></Route>
          <Route exact path="/mypage" component={MyPage}></Route>;
          <Route exact path="/mytest" component={AnalyzeTest}></Route>;
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
