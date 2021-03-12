import React from 'react';
import { connect } from 'react-redux';
import Signup from '../../Pages/Signup/Signup';
import { signUpRequestAction } from '../modules/user';
import { useSelector } from 'react-redux';

const SignupContainer = ({ signUpRequestAction }) => {
  const { userToken, signUpDone } = useSelector((state) => ({
    userToken: state.userReducer.userToken,
    signUpDone: state.userReducer.signUpDone,
  }));

  return (
    <Signup
      signUpRequestAction={signUpRequestAction}
      userToken={userToken}
      signUpDone={signUpDone}
    />
  );
};
export default connect(
  (state) => ({
    userToken: state.userReducer.userToken,
    signUpDone: state.userReducer.signUpDone,
  }),
  {
    signUpRequestAction,
  },
)(SignupContainer);
