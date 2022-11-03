export const dateFormat = (startedAt: string): string => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const converToDate = new Date(startedAt);
  const month = converToDate.getMonth() + 1;
  const date = converToDate.getDate();
  const dayOfWeek = week[converToDate.getDay()];
  return `${month}월 ${date}일 (${dayOfWeek}) 부터`;
};
