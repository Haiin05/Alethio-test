import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Loading = () => {
  const [dotArr, setDotArr] = useState([]);

  useEffect(() => {
    makePageArr();
  }, []);

  const makePageArr = () => {
    let pageArr = [];
    for (let i = 0; i < 8; i++) {
      pageArr.push(i);
    }
    setDotArr(pageArr);
  };

  return (
    <LoadingWrapper>
      <LoadingTitle>장바구니 목록을 불러오고 있습니다.</LoadingTitle>
      <LoadingDot>
        {dotArr?.map((dot, idx) => {
          return <div key={idx}></div>;
        })}
      </LoadingDot>
    </LoadingWrapper>
  );
};

export default withRouter(Loading);

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin-top: 100px;
`;

const LoadingTitle = styled.div`
  margin-bottom: 50px;
`;

const LoadingDot = styled.div`
  position: relative;
  width: 96px;
  height: 96px;
  margin: 0 auto;
  padding: 10px;

  div {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
    margin: auto;
    border-radius: 10px;
    background-color: #b9c1c4;
    opacity: 0.2;
    animation: dot 1s linear infinite;
  }

  div:nth-child(1) {
    transform: rotate(0) translateX(40px);
    animation-delay: 0;
  }

  div:nth-child(2) {
    transform: rotate(45deg) translateX(40px);
    animation-delay: 0.1s;
  }

  div:nth-child(3) {
    transform: rotate(90deg) translateX(40px);
    animation-delay: 0.2s;
  }

  div:nth-child(4) {
    transform: rotate(135deg) translateX(40px);
    animation-delay: 0.3s;
  }

  div:nth-child(5) {
    transform: rotate(180deg) translateX(40px);
    animation-delay: 0.4s;
  }

  div:nth-child(6) {
    transform: rotate(225deg) translateX(40px);
    animation-delay: 0.5s;
  }

  div:nth-child(7) {
    transform: rotate(270deg) translateX(40px);
    animation-delay: 0.6s;
  }

  div:nth-child(8) {
    transform: rotate(315deg) translateX(40px);
    animation-delay: 0.7s;
  }

  @keyframes dot {
    0% {
      opacity: 0.2;
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.2;
    }
  }
`;
