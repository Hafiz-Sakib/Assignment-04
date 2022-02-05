/* Cost for Persons */
let costForFirst100Person = 5000;
let costForSecond100Person = 4000;
let costForRestPerson = 3000;

function picnicBudget(person) {
  if (typeof person != "number") {
    console.log("Please Enter a Number!");
  } else if (person <= 0) {
    console.log(
      "Please Enter a Positive Number Value Which is Greater than Zero!"
    );
  } else if (person <= 100) {
    const costForFirst100 = person * costForFirst100Person;
    return cost;
  } else if (person <= 200) {
    const costForFirst100 = 100 * costForFirst100Person;
    const restPerson = person - 100;
    const costForSecond100 = restPerson * costForSecond100Person;
    const totalCost = costForFirst100 + costForSecond100;
    return totalCost;
  } else if (person > 200) {
    const costForFirst100 = 100 * costForFirst100Person;
    const costForSecond100 = 100 * costForSecond100Person;
    const otherPerson = person - 200;
    const costForOtherPerson = otherPerson * costForRestPerson;
    const totalCost = costForFirst100 + costForSecond100 + costForOtherPerson;
    return totalCost;
  }
}

let cost = picnicBudget(0);
console.log(cost);
