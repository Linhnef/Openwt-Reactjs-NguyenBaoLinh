//includes find in array => true/flase dinf + condition => arraybreak.
const coalesce = (...args) => args.find(x => !([undefined,null].includes(x)));
console.log(coalesce(null, undefined, '', NaN, 'hello'));