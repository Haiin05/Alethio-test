import React from 'react';
import { withRouter } from 'react-router-dom';
import Itembox from '../../../Components/Itembox/Itembox';
import styled from 'styled-components';

const MyPageItemList = ({ history, myData }) => {
  const myBasketItems = myData?.content;
  return (
    <MyPageItemListWrapper>
      {myBasketItems?.map((item, idx) => {
        const goToDetail = (id) => {
          history.push({
            pathname: `/mypage/order/${id}`,
            state: {
              id: item.id,
              name: item.itemName,
            },
          });
        };
        return (
          <Itembox
            key={idx}
            id={item.id}
            name={item.itemName}
            onClick={() => goToDetail(idx + 1)}
          />
        );
      })}
    </MyPageItemListWrapper>
  );
};

export default withRouter(MyPageItemList);

const MyPageItemListWrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
