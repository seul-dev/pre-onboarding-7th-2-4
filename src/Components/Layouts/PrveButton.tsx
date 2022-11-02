import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";

const PrveButton = () => {
  const navigate = useNavigate();

  return <SButton onClick={() => navigate(-1)} />;
};

export default PrveButton;

const SButton = styled(AiOutlineArrowLeft)`
  position: absolute;
  left: 1rem;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
