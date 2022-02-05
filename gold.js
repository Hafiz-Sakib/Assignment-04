/* This is the Function For Converting Gold Weight From Ana To Vori */

function AnaToVori(ana) {
  if (typeof ana != "number") {
    console.log("Please Enter a Number");
  }
  let vori = ana / 16;
  return vori;
}

let gold = AnaToVori(16);
console.log(gold);

/* Ana To Vori Function Ends */
