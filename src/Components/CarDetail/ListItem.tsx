import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  name: string;
  children: ReactNode;
}

const ListItem = ({ name, children }: Props) => {
  return (
    <Container>
      <h1>{name}</h1>
      <p>{children}</p>
    </Container>
  );
};

export default ListItem;

const Container = styled.div`
  width: 100%;
  height: 48px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  & > h1 {
    font-weight: 700;
  }
`;
