let change = (arr,d = 1) => arr.slice(d);

console.log(change([1, 2, 3]));
console.log(change([1, 2, 3], 1));
console.log(change([1, 2, 3], 2));
console.log(change([1, 2, 3], 4));