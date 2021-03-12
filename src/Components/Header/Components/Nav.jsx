import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const MENU_LIST = {
  menu: [
    { id: 1, menuTitle: '서비스', goTo: '/' },
    { id: 2, menuTitle: '회원가입', goTo: '/sign-up' },
    { id: 3, menuTitle: '로그인', goTo: '/login' },
  ],
};

const LOG_IN_MENU_LIST = {
  menu: [
    { id: 1, menuTitle: '서비스', goTo: '/' },
    { id: 2, menuTitle: '마이페이지', goTo: '/mypage/order' },
    { id: 3, menuTitle: '로그아웃', goTo: '/logout' },
  ],
};

const Nav = ({ history, name, hamFocused, handleHamClick }) => {
  const { userToken } = useSelector((state) => state.userReducer);
  const [navFocused, setNavFocused] = useState('/');
  const updatePage = () => {
    setNavFocused(history.location.pathname);
  };
  useEffect(() => {
    updatePage();
  }, [history.location.pathname]);

  const handleClick = (id) => {
    if (name === 'hamburger') {
      handleHamClick(id);
      history.push(id);
    } else {
      setNavFocused(id);
      history.push(id);
    }
  };

  return (
    <NavWrapper className={name}>
      {(userToken ? LOG_IN_MENU_LIST : MENU_LIST).menu.map((menu, idx) => {
        return (
          <>
            <Menu
              key={idx}
              className={name}
              to={menu.goTo}
              colored={
                name === 'nav'
                  ? navFocused === menu.goTo
                  : hamFocused === menu.goTo
              }
              onClick={() => handleClick(menu.goTo)}
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
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &.nav {
    @media (max-width: 414px) {
      display: none;
    }
    @media (min-width: 415px) {
      display: flex;
    }
  }

  &.hamburger {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Menu = styled.div`
  margin-left: 50px;
  cursor: pointer;

  @media (max-width: 642px) {
    font-size: 12px;
  }
  @media (min-width: 643px) {
    font-size: 16px;
  }

  &.nav {
    color: ${(props) =>
      props.colored
        ? ({ theme }) => theme.Color.grey[500]
        : ({ theme }) => theme.Color.black};
  }

  &.hamburger {
    margin: 50px 0 0 0;
    font-size: 25px;

    color: ${(props) =>
      props.colored
        ? ({ theme }) => theme.Color.grey[500]
        : ({ theme }) => theme.Color.black};
  }
`;
