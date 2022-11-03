import React from "react";
import HeaderBar from "@/Components/Layouts/HeaderBar";
import Category from "@/Components/CarMain/Category";
import MainLayout from "@/Components/Layouts/MainLayout";
import CarItem from "@/Components/CarMain/CarItem";
import { useNavigate } from "react-router-dom";
import { useGetCarList } from "../../lib/hooks/useGetCarList";

const CarMain = () => {
  const navigate = useNavigate();
  const { currentCategory, setCurrentCategory, data, isLoading } =
    useGetCarList();
  const handleItemClick = (id: number) => {
    navigate(`/carDetail/${id}`);
  };

  return (
    <>
      <HeaderBar title="전체차량" prevButton={false} />
      <Category
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <ul>
        {isLoading && <MainLayout message="불러오는 중" />}
        {data &&
          data.map((car) => {
            return <CarItem key={car.id} car={car} onClick={handleItemClick} />;
          })}
        {data && !data.length && <MainLayout message="차량이 없습니다." />}
      </ul>
    </>
  );
};

export default CarMain;
