import axios from "axios";
import { ICar, TSegmentRequest } from "../types";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API
});

export const getCarList = async (segment: TSegmentRequest): Promise<ICar[]> => {
  const { data } = await axiosInstance.get(`/api/cars?segment=${segment}`);
  return data.payload;
};

export const getCarListDetail = async (): Promise<ICar[]> => {
  const { data } = await axiosInstance.get("/api/cars");
  return data.payload;
};

export const queryKeys = {
  cars: (segment: TSegmentRequest) => ["cars", segment] as const,
  carDetail: ["carDtail"] as const
};
