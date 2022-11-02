import CarProfile from "@/Components/CarDetail/CarProfile";
import ListHeader from "@/Components/CarDetail/ListHeader";
import ListItem from "@/Components/CarDetail/ListItem";
import HeaderBar from "@/Components/Layouts/HeaderBar";
import React from "react";

const CarDetail = () => {
  return (
    <div>
      <HeaderBar title="차량상세" prevButton={true} />
      <CarProfile
        imgUrl="https://interview.platdev.net/avantecn7.png"
        brand="현대"
        name="아반떼 CN7"
      />
      <ListHeader title="차량 구매 일" />
      <ListItem>{"7월 15일 (수)부터"}</ListItem>
    </div>
  );
};

export default CarDetail;
