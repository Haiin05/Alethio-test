import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Itembox = ({ id, name, onClick }) => {
  return (
    <Item onClick={onClick}>
      <Id>{id}</Id>
      <Name>{name}</Name>
    </Item>
  );
};

export default withRouter(Itembox);

const Item = styled.li`
  width: 80%;
  height: 10%;
  background-color: #eeeeee;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 16px;
`;
const Id = styled.div`
  margin-right: 20px;
`;
const Name = styled.div``;
