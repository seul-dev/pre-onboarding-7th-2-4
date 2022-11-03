export const validateNew = (createdAt: string): boolean => {
  const now = new Date().getTime();
  const createdTime = new Date(createdAt).getTime();
  const diff = (now - createdTime) / (1000 * 60 * 60 * 24);
  return diff <= 1;
};
