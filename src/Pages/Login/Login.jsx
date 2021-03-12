import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Input from '../../Components/Input/Input';
import Btn from '../../Components/Button/Btn';
import { API } from '../../config';

const inputData = {
  data: [
    {
      id: 'email',
      type: 'email',
      placeholder: '이메일 주소 입력',
      outline: false,
    },
    {
      id: 'pw',
      type: 'password',
      placeholder: '비밀번호 입력',
      outline: true,
    },
  ],
};

const Login = ({ history }) => {
  /* input value */
  const [inputs, setInputs] = useState({
    email: '',
    pw: '',
  });
  const { email, pw } = inputs;

  /* check focused input */
  const [focusedInput, setFocusedInput] = useState(null);

  /* validation check */
  const checkEmail = email.includes('@') && email.includes('.');
  const checkPw = pw.length > 8 && pw.length < 15;

  /* function */
  const handleValue = (e, idx) => {
    const { id, value } = e.target;
    const handleInputs = { ...inputs, [id]: value };
    setInputs(handleInputs);
    handleValidation(idx);
  };

  const handleValidation = (idx) => {
    idx === 0 && handleEmail(idx);
    idx === 1 && handlePw(idx);
  };

  const handleEmail = (idx) => {
    !checkEmail && setFocusedInput(idx);
  };

  const handlePw = (idx) => {
    !checkPw && setFocusedInput(idx);
  };

  const isValidAll = (idx) => {
    !checkEmail && alert('올바른 이메일 형식으로 입력해 주세요');
    !checkPw && alert('비밀번호를 최소 8자, 최대 15자로 만들어 주세요');
  };

  const handleLogin = async (idx) => {
    isValidAll(idx);

    let options = {
      method: 'POST',
      url: `${API}/login`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        email: email,
        password: pw,
      },
    };

    try {
      let response = await axios(options);
      let responseOK = response && response.status === 200;
      if (response.message === 'SUCCESS') {
        localStorage.setItem('token', response.token);
        alert('로그인 성공!');
        history.push('/');
      } else {
        alert('비밀번호를 확인해 주세요');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginWrapper>
      {inputData.data.map((data, idx) => {
        return (
          <Input
            key={idx}
            id={data.id}
            type={data.type}
            placeholder={data.placeholder}
            onChange={(e) => handleValue(e, idx)}
            onBlur={() => handleValidation(idx)}
            emailBorder={idx === focusedInput && !checkEmail}
            pwBorder={idx === focusedInput && !checkPw}
            outline={data.outline}
            className={data.id}
          />
        );
      })}
      <Btn onClick={() => handleLogin()} title={'로그인'} />
    </LoginWrapper>
  );
};

export default withRouter(Login);

const LoginWrapper = styled.div`
  width: 100%;
  max-width: 42em;
  height: 42em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
