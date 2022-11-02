import ListHeader from "@/Components/CarDetail/ListHeader";
import ListItem from "@/Components/CarDetail/ListItem";
import HeaderBar from "@/Components/Layouts/HeaderBar";
import React from "react";

const CarDetail = () => {
  return (
    <div>
      <HeaderBar title="차량상세" prevButton={true} />
      <ListHeader title="차량 구매 일" />
      <ListItem name="이용 가능일">{"7월 15일 (수)부터"}</ListItem>
    </div>
  );
};

export default CarDetail;
