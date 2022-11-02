import React from "react";
import { TFuelType, TSegment, SEGMENT, FUELTYPE } from "@/lib/types";
import styled from "styled-components";
import NewItemTag from "./NewItemTag";
import { validateNew } from "../../lib/util/validateNew";

interface Props {
  brand: string;
  name: string;
  segment: TSegment;
  fuelType: TFuelType;
  amount: number;
  createdAt: string;
  imageUrl: string;
  onClick: () => void;
}

const CarItem = (props: Props) => {
  const {
    brand,
    name,
    segment,
    fuelType,
    imageUrl,
    amount,
    createdAt,
    onClick
  } = props;
  return (
    <Container onClick={onClick}>
      <Info>
        <Title>
          <h2>{brand}</h2>
          <h2>{name}</h2>
        </Title>
        <SubInfo>
          <p>
            {SEGMENT[segment]} / {FUELTYPE[fuelType]}
          </p>
          <p>월 {amount} 원 부터</p>
        </SubInfo>
      </Info>
      <ImgContainer>
        <img src={imageUrl} alt={name} />
        {validateNew(createdAt) && <NewItemTag />}
      </ImgContainer>
    </Container>
  );
};

export default CarItem;

const Container = styled.li`
  width: 100%;
  height: 120px;
  cursor: pointer;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.black};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.6rem;
`;

const Title = styled.div`
  & > h2 {
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: 700;
    line-height: 17px;
  }
`;

const SubInfo = styled.div`
  & > p {
    font-size: ${({ theme }) => theme.fontSize.XSmall};
    line-height: 15px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 152px;
  height: 80px;
  & > img {
    /* display: block; */
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
