import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const MENU_LIST = {
  menu: [
    { menuTitle: '서비스', goTo: '/' },
    { menuTitle: '회원가입', goTo: '/sign-up' },
    { menuTitle: '로그인', goTo: '/login' },
  ],
};

const Nav = ({ history, type, setHandleMenu, name }) => {
  const [focused, setfocused] = useState(0);
  const handleClick = (idx) => {
    console.log(name);
    setfocused(idx);
    history.push(MENU_LIST.menu[idx].goTo);
    name !== 'nav' && setHandleMenu(false);
  };

  console.log(focused);

  return (
    <NavWrapper className={name} type={type}>
      {MENU_LIST.menu.map((menu, idx) => {
        return (
          <>
            <Menu
              type={type}
              key={idx}
              to={menu.goTo}
              colored={focused === idx}
              onClick={() => handleClick(idx)}
            >
              {menu.menuTitle}
            </Menu>
          </>
        );
      })}
    </NavWrapper>
  );
};

export default withRouter(Nav);

const NavWrapper = styled.div`
  width: ${(props) => (props.type === 'column' ? '' : '50%')};
  height: 100%;
  display: flex;
  flex-direction: ${(props) => (props.type === 'column' ? 'column' : '')};
  justify-content: ${(props) =>
    props.type === 'column' ? 'flex-start' : 'flex-end'};
  align-items: center;

  &.nav {
    @media (max-width: 414px) {
      display: none;
    }
    @media (min-width: 415px) {
      display: flex;
    }
  }
`;

const Menu = styled.div`
  margin-left: ${(props) => (props.type === 'column' ? '' : '50px')};
  margin-top: ${(props) => (props.type === 'column' ? '30px' : '')};
  color: ${(props) =>
    props.colored
      ? ({ theme }) => theme.Color.grey[500]
      : ({ theme }) => theme.Color.black};

  cursor: pointer;

  @media (max-width: 642px) {
    font-size: ${(props) => (props.type === 'column' ? '25px' : '12px')};
  }
  @media (min-width: 643px) {
    font-size: 16px;
  }
`;
