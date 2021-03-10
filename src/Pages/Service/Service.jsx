import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Btn from '../../Components/Button/Btn';

const Service = ({ history }) => {
  const goTo = () => {
    const checkLogedIn = localStorage.getItem('token');

    checkLogedIn ? alert('주문 성공') : alert('로그인을 해주세요');
    history.push('/sign-up');
  };

  return (
    <ServiceWrapper>
      <Img src="images/alethio-letterLogo.png" alt="serviceImg" />
      <Btn onClick={() => goTo()} title={'주문 하기'} />
    </ServiceWrapper>
  );
};

export default withRouter(Service);

const ServiceWrapper = styled.div`
  width: 100%;
  max-width: 672px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 50px;
`;

const Img = styled.img`
  width: 50%;
  height: 20%;
  margin-bottom: 30px;
`;
