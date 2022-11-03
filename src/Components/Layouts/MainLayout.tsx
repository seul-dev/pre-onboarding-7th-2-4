import React from "react";
import styled from "styled-components";

interface Props {
  message: string;
}

const MainLayout = ({ message }: Props) => {
  return <Container>{message}</Container>;
};

export default MainLayout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px); //header, category
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
