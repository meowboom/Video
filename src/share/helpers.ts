export const uniqueKey = () => {
  const timestamp = new Date().getTime().toString(16);
  const randomStr = Math.random().toString(16).replace(".", "");
  const uniqueId = timestamp + randomStr;
  return uniqueId;
};

export const randomValue = (value: number) =>
  Math.floor(Math.random() * (value - 1) + 1);
