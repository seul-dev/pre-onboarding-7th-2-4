import React from "react";
import CarProfile from "@/Components/CarDetail/CarProfile";
import ListHeader from "@/Components/CarDetail/ListHeader";
import ListItem from "@/Components/CarDetail/ListItem";
import HeaderBar from "@/Components/Layouts/HeaderBar";
import useGetCarDetail from "../../lib/hooks/useGetCarDetail";
import { useParams } from "react-router-dom";
import MainLayout from "@/Components/Layouts/MainLayout";
import { FUELTYPE, SEGMENT } from "../../lib/types/index";
import { dateFormat } from "../../lib/util/dateFormat";
import { amountFormat } from "@/lib/util/amountFormat";

const CarDetail = () => {
  const { id } = useParams();
  const { carInfo, isLoading } = useGetCarDetail(Number(id));

  return (
    <div>
      <HeaderBar title="차량상세" prevButton={true} />
      {isLoading && <MainLayout message="불러오는 중" />}

      {carInfo && (
        <>
          <CarProfile
            imgUrl={carInfo?.attribute.imageUrl}
            brand={carInfo?.attribute.brand}
            name={carInfo?.attribute.name}
          />
          <ListItem>월 {amountFormat(carInfo?.amount)} 원</ListItem>
          <ListHeader title="차량 정보" />
          <ListItem name="차종">{SEGMENT[carInfo.attribute.segment]}</ListItem>
          <ListItem name="연료">
            {FUELTYPE[carInfo.attribute.fuelType]}
          </ListItem>
          <ListItem name="이용 가능일">
            {dateFormat(carInfo?.startDate)}
          </ListItem>
          <ListHeader title="보험" />
          {carInfo.insurance?.map((item) => (
            <ListItem key={item.name} name={item.name}>
              {item.description}
            </ListItem>
          ))}

          <ListHeader title="추가상품" />
          {carInfo.additionalProducts?.map((item) => (
            <ListItem key={item.name} name={item.name}>
              월 {amountFormat(item.amount)} 원
            </ListItem>
          ))}
        </>
      )}
    </div>
  );
};

export default CarDetail;
