export const KSTDate = () => {
  const curr = new Date();
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const KST = new Date(utc + KR_TIME_DIFF);
  const dateArray = KST.toISOString().split('T');
  return dateArray[0];
};
