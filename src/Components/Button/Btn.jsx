import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Btn = ({ onClick, title }) => {
  return <BtnWrapper onClick={onClick}>{title}</BtnWrapper>;
};

export default withRouter(Btn);

const BtnWrapper = styled.button`
  width: 54%;
  height: 40px;
  margin-top: 30px;
  border: solid 1px ${({ theme }) => theme.Color.lightBlack};
  border-radius: 30px;
  padding: 0 2%;
  background-color: #eeeeee;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
