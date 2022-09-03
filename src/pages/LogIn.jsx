import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";

const Login = () => {
  return (
    <StAddForm>
      <Header />
      <LoginForm />
    </StAddForm>
  );
};

export default Login;

const StAddForm = styled.div`
  padding-top: 140px;
`;