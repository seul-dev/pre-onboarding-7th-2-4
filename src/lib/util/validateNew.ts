export const validateNew = (createdAt: string): boolean => {
  const now = new Date().getTime();
  const createdTime = new Date(createdAt).getTime();
  const diff = (now - createdTime) / (1000 * 60 * 60 * 24);
  if (diff <= 1) {
    return true;
  } else {
    return false;
  }
};
