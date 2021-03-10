import React, { useState, useRef } from 'react';
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
    {
      id: 'rePw',
      type: 'password',
      placeholder: '비밀번호 재입력',
      outline: true,
    },
    {
      id: 'mobile',
      type: 'number',
      placeholder: '핸드폰 번호 입력 (번호만 입력)',
      outline: true,
    },
  ],
};

const Signup = ({ history }) => {
  /* input value */
  const [inputs, setInputs] = useState({
    email: '',
    pw: '',
    rePw: '',
    mobile: '',
  });
  const { email, pw, rePw, mobile } = inputs;

  /* check focused input */
  const [focusedInput, setFocusedInput] = useState(null);

  /* useRef */
  const inputRef = useRef(null);

  /* validation check */
  const checkEmail = email.includes('@') && email.includes('.');
  const checkPw = pw.length > 8 && pw.length <= 15;
  const checkRePw = pw === rePw;

  /* function */
  const handleValue = (e, idx) => {
    const { id, value } = e.target;
    const handleInputs = { ...inputs, [id]: value };
    setInputs(handleInputs);

    idx === 1 && handlePw(idx);
  };

  const handleBlur = (idx) => {
    console.log('blur', idx);
    idx === 0 && handleEmail(idx);
  };

  const handleEmail = (idx) => {
    !checkEmail && setFocusedInput(idx);
  };

  const handlePw = (idx) => {
    !checkPw && setFocusedInput(idx);
  };

  const isValidAll = () => {
    !checkEmail && alert('올바른 이메일 형식으로 입력해 주세요');
    inputRef.current && inputRef.current.children[0].focus();

    !checkPw && alert('비밀번호를 최소 8자, 최대 15자로 만들어 주세요');
    !checkRePw && alert('비밀번호가 일치하지 않습니다');

    //return checkEmail && checkPw && checkRePw !==
  };

  const handleSignup = async (idx) => {
    isValidAll(idx);

    let options = {
      method: 'POST',
      url: `${API}/sign-up`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: pw,
        mobile: mobile,
      }),
    };

    try {
      let response = await axios(options);
      let responseOK = response && response.status === 200;

      responseOK &&
        response.token &&
        localStorage.setItem('token', response.data.token);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignupWrapper ref={inputRef}>
      {inputData.data.map((data, idx) => {
        return (
          <Input
            key={idx}
            id={data.id}
            type={data.type}
            placeholder={data.placeholder}
            onChange={(e) => handleValue(e, idx)}
            onBlur={() => handleBlur(idx)}
            emailBorder={idx === focusedInput && !checkEmail}
            pwBorder={idx === focusedInput && !checkPw}
            outline={data.outline}
            name={data.id}
            minLength={`${idx === 1 || idx === 2 ? 8 : 4}`}
            maxLength={`${idx === 1 || idx === 2 ? 15 : ''}`}
          />
        );
      })}
      <Btn onClick={() => handleSignup()} title={'회원가입'} />
    </SignupWrapper>
  );
};

export default withRouter(Signup);

const SignupWrapper = styled.ul`
  width: 100%;
  max-width: 42em;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
