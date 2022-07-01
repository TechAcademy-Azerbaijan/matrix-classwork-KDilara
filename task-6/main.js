let mtr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let mtr2 = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
];
let sum = 0;

for (i = 0; i < mtr2.length; i++) {
  for (j = 0; j < mtr2[i].length; j++) {
    if (mtr2[i][j] == 1) {
      sum = sum+mtr1[i][j];
    }
  }
}
console.log(sum)
