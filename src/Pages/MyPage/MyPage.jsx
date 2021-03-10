import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Itembox from '../../Components/Itembox/Itembox';

const MyPageDetail = ({ history }) => {
  return (
    <MyPageDetailWrapper>
      <Itembox
        id={history.location.state.id}
        name={history.location.state.name}
      />
    </MyPageDetailWrapper>
  );
};

export default withRouter(MyPageDetail);

const MyPageDetailWrapper = styled.ul`
  width: 100%;
  max-width: 672px;
  height: 100%;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
