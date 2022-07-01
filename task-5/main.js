let mtr = [
  [134, 475, 30, 424],
  [303, 151, 419, 235],
  [248, 166, 90, 42],
  [318, 237, 184, 36],
];
let sum1 = 0;
let sum2 = 0;
for (i = 0; i < mtr.length; i++) {
  for (j = 0; j < mtr[i].length; j++)
    if (i == j) {
      sum1 = sum1 + mtr[i][j];
    }
    else if (j == mtr[i].length - (1+i)) {
      sum2 = sum2 + mtr[i][j];
      
    }
}

console.log(sum1);
console.log(sum2);
