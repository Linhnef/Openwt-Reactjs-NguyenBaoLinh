
let excute = (...x) => x.reduce((rs,fn) => (...args) => fn(rs(...args)));


const add = (x, y) => x + y;
const square = (x, y = 0) => x * x;
const addAndSquare = excute(add, square);
console.log(addAndSquare(1, 2));
console.log(addAndSquare(3, 2));