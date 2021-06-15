let compare = (arr, cmr = (a,b) => (a-b)) =>{
   return arr.reduce((a, b) => (cmr(a, b) >= 0 ? b : a));
}

console.log(compare([1, 3, 2])); 
console.log(compare([10, 30, 20], (a, b) => b - a));  
console.log(compare(
  [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }],
  (a, b) => a.age - b.age)); 