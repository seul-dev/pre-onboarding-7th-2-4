import React from "react";
import styled, { css } from "styled-components";

interface Props {
  tagName: string;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryTag = ({ tagName, isSelected, onClick }: Props) => {
  return (
    <Container isSelected={isSelected} onClick={onClick}>
      {tagName}
    </Container>
  );
};

export default CategoryTag;

const Container = styled.li<{ isSelected: boolean }>`
  height: 27px;
  width: 62px;
  border-radius: 62px;
  padding: 5px 18px;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  text-align: center;
  font-weight: 700;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  ${({ isSelected, theme }) => css`
    background-color: ${isSelected ? theme.color.black : theme.color.gray};
    color: ${isSelected ? theme.color.white : theme.color.black};
    font-size: ${theme.fontSize.small};
  `}
`;
