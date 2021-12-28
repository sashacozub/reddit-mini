// Format every "1000" into "1k"
export const numberFormat = (number) => {
  if (Math.abs(number) >= 1000) {
    const formattedNum = (number / 1000).toFixed(1);
    return formattedNum + 'k';
  }

  return number;
};
