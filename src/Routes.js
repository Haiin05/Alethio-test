import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Service from './Pages/Service/Service';
import SignupContainer from './redux/containers/SignupContainer';
import Login from './Pages/Login/Login';
import Logout from './Pages/Logout/Logout';
import MyPage from './Pages/MyPage/MyPage';
import MyPageDetail from './Pages/MyPageDetail/MyPageDetail';
import Header from './Components/Header/Header';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Service} />
        <Route exact path="/sign-up" component={SignupContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/mypage/order" component={MyPage} />
        <Route exact path="/mypage/order/:id" component={MyPageDetail} />
      </Switch>
    </Router>
  );
};
export default Routes;
