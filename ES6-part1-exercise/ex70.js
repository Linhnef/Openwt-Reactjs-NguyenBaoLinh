let counter = (arr,val) => {
   let rs = 0;
   arr.map(x => x == val ? rs = rs+1 : rs );
   return rs;
}
console.log(counter([1, 1, 2, 1, 2, 3], 1));
console.log(counter([1, 1, 2, 1, 2, 3], 2));
console.log(counter([1, 1, 2, 1, 2, 3], 3));