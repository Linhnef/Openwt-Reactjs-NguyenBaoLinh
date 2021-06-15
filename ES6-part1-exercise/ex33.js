const ran = (min, max) => (Math.random() * max - min) + min;

console.log(ran(2, 10)); 
console.log(ran(1, 5)); 
console.log(ran(-5, -2)); 
console.log(ran(0, 1));