// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
/* 
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th
16th = 15th + 14th
119th = 118th + 117th
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th
*/
/* 
const fibo = [0, 1]
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
 */

/* function fibonacciSeries(num) {
    let fibo = [0, 1];
    for (i = 2; i < num; i++) {
      fibo[i] = fibo[i - 2] + fibo[i - 1];
    }
    return fibo;
  }
  
  let series = fibonacciSeries(51);
  console.log(series);
   */

function fibonacciSeries(num) {
  if (typeof num != "number") {
    return "Please Enter a Number";
  } else if (num < 2) {
    return "Please Enter a Positive number which is larger than 1";
  }
  let fibo = [0, 1];
  for (i = 2; i < num; i++) {
    fibo[i] = fibo[i - 2] + fibo[i - 1];
  }
  return fibo;
}

let series = fibonacciSeries("j");
console.log(series);
