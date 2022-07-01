let mtr = [
  [4, -2, 5],
  [1, -4, -12],
  [0, 1, -3]
];
let sum = 0;
for (i = 0; i<mtr.length; i++) {
  for( j=0; j<mtr[i].length; j++)
    if(mtr[i][j]>0){
      sum= sum+mtr[i][j];
    }
  }
  console.log(sum)
