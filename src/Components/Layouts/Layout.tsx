import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
const Layout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  max-width: 450px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.white};
`;
