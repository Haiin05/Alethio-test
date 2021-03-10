import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import MyPageItemList from './Components/MyPageItemList';
import Pagination from './Components/Pagination';
import Loading from './Components/Loading';
import { API, REQRES } from '../../config';

const MyPage = () => {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageArr, setPageArr] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  const PAGE_URL = `${REQRES}/api/users?page=${currentPage}`;

  useEffect(() => {
    getData();
    makePageArr();
  }, [totalPages, currentPage]);

  const getData = async () => {
    let options = {
      method: 'GET',
      url: PAGE_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    setLoading(true);
    try {
      let response = await axios(options);
      let responseOK = response && response.status === 200;
      responseOK && setMyData(response.data);
      setTotalPages(response.data.total_pages);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const makePageArr = () => {
    let pageArr = [];
    for (let i = 0; i < totalPages; i++) {
      pageArr.push(i);
    }
    setPageArr(pageArr);
  };

  return (
    <MyPageWrapper>
      {loading && <Loading />}
      <MyPageItemList myData={myData} />
      <Pagination pageArr={pageArr} setCurrentPage={setCurrentPage} />
    </MyPageWrapper>
  );
};

export default withRouter(MyPage);

const MyPageWrapper = styled.div`
  width: 100%;
  max-width: 672px;
  height: 100%;
  margin: 0 auto;
  margin-top: 50px;
`;
