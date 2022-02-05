/* Function For pandaCost Started */

/* Food Price */
const singaraPrice = 7;
const somusaPrice = 10;
const jilapiPrice = 15;

/* Function Started */
function pandaCost(singaraQuantity, somusaQuantity, jilapiQuantity) {
  let totalFoodPrice = 0;
  singaraCost = singaraPrice * singaraQuantity;
  somusaCost = somusaPrice * somusaQuantity;
  jilapiCost = jilapiPrice * jilapiQuantity;
  totalFoodPrice = singaraCost + somusaCost + jilapiCost;
  return totalFoodPrice;
}

let bill = pandaCost(5, 5, 5);
console.log(bill);

/* Function For pandaCost Ended */
