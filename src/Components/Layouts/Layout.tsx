import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HeaderBar from "./HeaderBar";
const Layout = () => {
  return (
    <Containter>
      <HeaderBar />
      <Outlet />
    </Containter>
  );
};

export default Layout;

const Containter = styled.div`
  background-color: ${({ theme }) => theme.color.white};
`;
