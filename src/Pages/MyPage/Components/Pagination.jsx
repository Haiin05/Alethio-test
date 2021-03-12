import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Pagination = ({ pageArr, setCurrentPage }) => {
  const goToPage = (pageNum) => {
    setCurrentPage(pageNum);
  };
  return (
    <PaginationWrapper>
      {pageArr?.map((num, idx) => {
        return (
          <Btn key={idx} onClick={() => goToPage(idx)}>
            {num + 1}
          </Btn>
        );
      })}
    </PaginationWrapper>
  );
};

export default withRouter(Pagination);

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Btn = styled.button`
  margin-right: 10px;
  border: none;
  font-size: 20px;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
