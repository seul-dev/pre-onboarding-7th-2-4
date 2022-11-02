import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

const ListHeader = ({ title }: Props) => {
  return <Container>{title}</Container>;
};

export default ListHeader;

const Container = styled.header`
  width: 100%;
  height: 48px;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
`;
