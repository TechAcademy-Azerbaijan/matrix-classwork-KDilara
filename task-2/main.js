let array = [3, 5, -7, 7, 5, -9, -4]
let count = 0;
for( i = 1; i<array.length; i++){
  if(array[i]!=array[i-1]){
    count++;
  }
}
console.log(count)
