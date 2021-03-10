import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Logo = ({ history }) => {
  return (
    <LogoWrapper onClick={() => history.push('/')}>
      <Img src="/Images/alethio-letterLogo.png" alt="logoImg" />
    </LogoWrapper>
  );
};

export default withRouter(Logo);

const LogoWrapper = styled.div`
  width: 50%;
  height: 100%;
  cursor: pointer;
`;

const Img = styled.img`
  width: 30%;
  height: 100%;
`;
