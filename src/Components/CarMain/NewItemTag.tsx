import React from "react";
import styled, { css } from "styled-components";

const NewItemTag = () => {
  return <Container>신규</Container>;
};

export default NewItemTag;

const Container = styled.div`
  position: absolute;
  top: -8px;
  right: -12px;
  padding: 4px 15px;
  border-radius: 42px;
  height: 22px;
  width: 52px;
  font-weight: 700;
  ${({ theme }) => css`
    font-size: ${theme.fontSize.XSmall};
    background-color: ${theme.color.blue};
    color: ${theme.color.white};
  `};
`;

// 차량 생성일로부터 1일 이내일 경우 표시 -> 사용하는 컴포넌트에서 조건부로 보이기
