import React from "react";
import CarItem from "./CarItem";
import { useNavigate } from "react-router-dom";

const CarList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <CarItem
        brand="현대"
        name="아반떼 CN7"
        segment="C"
        fuelType="gasoline"
        amount={600000}
        createdAt="2022-10-05T10:28:08.442Z"
        imageUrl="https://interview.platdev.net/avantecn7.png"
        onClick={() => navigate(`/carDetail/${12}`)}
      />
    </div>
  );
};

export default CarList;
