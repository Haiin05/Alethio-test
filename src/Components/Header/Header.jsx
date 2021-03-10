import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo/Logo';
import Nav from './Components/Nav';
import HamburgerMenu from '../Header/HamburgerMenu/HamburgerMenu';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav name={'nav'} />
      <HamburgerMenu name={'hamburger'} />
    </HeaderWrapper>
  );
};

export default withRouter(Header);

const HeaderWrapper = styled.header`
  height: 10%;
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;
