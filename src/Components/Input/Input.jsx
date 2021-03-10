import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Inputbox = ({
  name,
  id,
  type,
  placeholder,
  onChange,
  onBlur,
  ref,
  emailBorder,
  pwBorder,
  outline,
  minLength,
  maxLength,
}) => {
  return (
    <Input
      className={name}
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      ref={ref}
      emailBorder={emailBorder}
      pwBorder={pwBorder}
      outline={outline}
      minLength={minLength}
      maxLength={maxLength}
    />
  );
};

export default withRouter(Inputbox);

const Input = styled.input`
  width: 50%;
  height: 7%;
  margin-top: 3%;
  border: solid 1px ${({ theme }) => theme.Color.lightBlack};
  border-radius: 30px;
  padding: 0 2%;

  &:focus {
    outline: none !important;
    border-color: #719ece;
    box-shadow: 0 0 10px #719ece;
  }

  &.email {
    border: solid 1px
      ${(props) =>
        props.emailBorder ? 'tomato' : ({ theme }) => theme.Color.lightBlack};
  }

  &.pw {
    border: solid 1px
      ${(props) =>
        props.pwBorder ? 'tomato' : ({ theme }) => theme.Color.lightBlack};
  }
`;
