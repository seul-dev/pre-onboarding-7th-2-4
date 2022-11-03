import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  max-width: 450px;
  margin: 0 auto;
  padding-bottom: 150px;
  background-color: ${({ theme }) => theme.color.white};
`;
