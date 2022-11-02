export const FUELTYPE = {
  gasoline: "가솔린",
  ev: "전기",
  hybrid: "하이브리드"
} as const;

type fuelTypeObject = typeof FUELTYPE;
export type TFuelType = keyof fuelTypeObject;
export type TFuelTypeValue = fuelTypeObject[TFuelType];

export const SEGMENT = {
  ALL: "전체",
  C: "소형",
  D: "중형",
  E: "대형",
  SUV: "SUV"
} as const;

type segmentObject = typeof SEGMENT;
export type TSegment = keyof segmentObject;
export type TSegmentValue = segmentObject[TSegment];
