import React from "react";
import HeaderBar from "@/Components/Layouts/HeaderBar";
import Category from "@/Components/CarMain/Category";
import CarList from "@/Components/CarMain/CarList";

const CarMain = () => {
  return (
    <div>
      <HeaderBar title="전체차량" prevButton={false} />
      <Category />
      <CarList />
    </div>
  );
};

export default CarMain;
