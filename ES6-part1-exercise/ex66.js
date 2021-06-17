
let excute = (...x) => x.reduce((rs,fn) => (...args) => rs(fn(...args)));


const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = excute(
  add5,
  multiply
);
console.log(multiplyAndAdd5(5, 2)); 