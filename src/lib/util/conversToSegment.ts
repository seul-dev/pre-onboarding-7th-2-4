import { TSegmentValue } from "../types/index";

export const convertToSegment = (category: TSegmentValue) => {
  switch (category) {
    case "전체":
      return "";
    case "소형":
      return "C";
    case "중형":
      return "D";
    case "대형":
      return "E";
    case "SUV":
      return "SUV";
    default:
      throw new Error("unmatched");
  }
};
