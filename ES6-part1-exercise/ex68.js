let excute = (a,b) => (...args) => a(...b.map(fn => fn.apply(null,args)));

  const average = excute((a, b) => a / b, [
    arr => arr.reduce((a, v) => a + v, 0),
    arr => arr.length
  ]);

console.log(average([ 6, 7]));
console.log(average([1, 2, 3, 4, 5, 6, 7]));