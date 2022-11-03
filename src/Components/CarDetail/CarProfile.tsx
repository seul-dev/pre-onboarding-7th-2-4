import React from "react";
import styled from "styled-components";

interface Props {
  imageUrl: string;
  brand: string;
  name: string;
}

const CarProfile = ({ imageUrl, brand, name }: Props) => {
  return (
    <>
      <ImgContainer>
        <img src={imageUrl} alt={name} />
      </ImgContainer>
      <Title>
        <h3>{brand}</h3>
        <h1>{name}</h1>
      </Title>
    </>
  );
};

export default CarProfile;

const ImgContainer = styled.div`
  height: 240px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  width: 100%;
  padding: 1rem;
  & > h3 {
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  & > h1 {
    font-size: ${({ theme }) => theme.fontSize.XLarge};
    font-weight: 700;
  }
`;
