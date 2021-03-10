import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Service from './Pages/Service/Service';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import MyPage from './Pages/MyPage/MyPage';
import MyPageDetail from './Pages/MyPageDetail/MyPageDetail';
import Header from './Components/Header/Header';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Service} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mypage/order" component={MyPage} />
        <Route exact path="/mypage/order/:id" component={MyPageDetail} />
      </Switch>
    </Router>
  );
};
export default Routes;
