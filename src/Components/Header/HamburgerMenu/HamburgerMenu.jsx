import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../Components/Nav';
import { ReactComponent as HamburgerBar } from '../../../Images/Assets/hamburgerBar.svg';
import { ReactComponent as Exit } from '../../../Images/Assets/exit.svg';

const HamburgerMenu = ({ history, name }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [hamFocused, setHamFocused] = useState('/');

  const handleHamClick = (id) => {
    setHamFocused(id);
    setOpenMenu(false);
  };

  return (
    <HamburgerMenuWrapper className={name}>
      <HamburgerBarWrapper onClick={() => setOpenMenu(true)}>
        <HamburgerBar />
      </HamburgerBarWrapper>
      {openMenu && (
        <NavBg>
          <NavExit>
            <ExitWrapper onClick={() => setOpenMenu(false)}>
              <Exit />
            </ExitWrapper>
          </NavExit>
          <Nav
            name={'hamburger'}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            hamFocused={hamFocused}
            handleHamClick={handleHamClick}
          />
        </NavBg>
      )}
    </HamburgerMenuWrapper>
  );
};

export default withRouter(HamburgerMenu);

const HamburgerMenuWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &.hamburger {
    @media (max-width: 414px) {
      display: flex;
    }
    @media (min-width: 415px) {
      display: none;
    }
  }
`;

const HamburgerBarWrapper = styled.div`
  width: 30px;
  height: 30px;
`;

const NavBg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.Color.grey[300]};
`;

const NavExit = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ExitWrapper = styled.div`
  width: 30px;
  height: 30px;
  padding: 30px;
`;
