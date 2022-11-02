import React from "react";
import styled from "styled-components";
import PrveButton from "./PrveButton";

interface Props {
  title: string;
  prevButton: boolean;
}

const HeaderBar = ({ title, prevButton }: Props) => {
  return (
    <SHeader>
      {prevButton && <PrveButton />}
      <h1>{title}</h1>
    </SHeader>
  );
};

export default HeaderBar;

const SHeader = styled.header`
  position: relative;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
  & > h1 {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;
