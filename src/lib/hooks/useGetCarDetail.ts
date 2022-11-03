import { useQuery } from "@tanstack/react-query";
import { getCarListDetail, queryKeys } from "../api/index";

const useGetCarDetail = (id: number) => {
  const { data, isLoading } = useQuery(queryKeys.carDetail, getCarListDetail);

  const carInfo = data?.find((car) => car.id === id);

  return { carInfo, isLoading };
};

export default useGetCarDetail;
