/*
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/
function calculateElectronicsBudget(
  laptopQuantity,
  tabletsQuantity,
  mobileQuantity
) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  const laptopTotalPrice = laptopPrice * laptopQuantity;
  const tabletTotalPrice = tabletPrice * tabletsQuantity;
  const mobileTotalPrice = mobilePrice * mobileQuantity;

  const netPrice = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;
  return netPrice;
}
const gadgetsQuantity = calculateElectronicsBudget(2, 3, 5);
console.log(gadgetsQuantity);
