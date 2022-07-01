let array = [3, 5, -7, 7, 5, -9, -4];
let arr = [];
let count;
for (i = 0; i < array.length; i++) {
  count = 0;
  for (j = 0; j < array.length; j++) {
    if (array[i] === array[j]) {
      count++;
    }
  }
  if (!(count > 1)) {
    arr.push(array[i]);
  }
}
console.log(arr);
