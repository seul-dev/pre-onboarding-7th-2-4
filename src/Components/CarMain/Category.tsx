import React from "react";
import styled from "styled-components";
import CategoryTag from "./CategoryTag";
import { TSegmentValue } from "../../lib/types/index";

interface Props {
  currentCategory: TSegmentValue;
  setCurrentCategory: React.Dispatch<React.SetStateAction<TSegmentValue>>;
}

const Category = ({ currentCategory, setCurrentCategory }: Props) => {
  const CATEGORY_LIST: TSegmentValue[] = [
    "전체",
    "소형",
    "중형",
    "대형",
    "SUV"
  ];
  return (
    <Container>
      {CATEGORY_LIST.map((category) => (
        <CategoryTag
          key={category}
          tagName={category}
          isSelected={currentCategory === category}
          onClick={() => setCurrentCategory(category)}
        />
      ))}
    </Container>
  );
};

export default Category;

const Container = styled.ul`
  width: 100%;
  overflow: auto;
  display: flex;
  padding: 0.3rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.black};
`;

// 해당 부분은 좌우 슬라이드 되는 카테고리 입니다.
// 각 카테고리를 누르면 segment에 맞는 차량만 표시되어야 합니다.
