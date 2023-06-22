export const getFinalPrice = (price: string): number => {
  if (price) {
    const infoPrice = price.split("/");
    const priceF = infoPrice[0].split("$");
    return parseInt(priceF[1]);
  }
  return 0;
};
