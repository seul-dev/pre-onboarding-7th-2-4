import { useQuery } from "@tanstack/react-query";
import { getCarListDetail, queryKeys } from "../api/index";

const useGetCarDetail = (id: number) => {
  const { data, isLoading } = useQuery(queryKeys.carDetail, getCarListDetail, {
    select: (carList) => carList.filter((car) => car.id === id)
  });
  const carInfo = data?.length === 1 ? data[0] : {};
  return { carInfo, isLoading };
};

export default useGetCarDetail;
