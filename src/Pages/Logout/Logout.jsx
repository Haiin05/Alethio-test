import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Btn from '../../Components/Button/Btn';

const Logout = ({ history }) => {
  const handleLogout = () => {
    history.push('/');
  };

  return (
    <LoginWrapper>
      <Btn onClick={() => handleLogout()} title={'로그아웃'} />
    </LoginWrapper>
  );
};

export default withRouter(Logout);

const LoginWrapper = styled.div`
  width: 100%;
  max-width: 42em;
  height: 42em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
