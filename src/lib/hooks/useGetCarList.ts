import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCarList, queryKeys } from "../api";
import { TSegmentValue } from "../types/index";
import { convertToSegment } from "../util/conversToSegment";

export const useGetCarList = () => {
  const [currentCategory, setCurrentCategory] = useState<TSegmentValue>("전체");
  const segment = convertToSegment(currentCategory);

  const { data, isLoading } = useQuery(queryKeys.cars(segment), () =>
    getCarList(segment)
  );

  return { currentCategory, setCurrentCategory, data, isLoading };
};
