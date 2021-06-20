
const mapString = (str, fn) =>
  str
    .split('')
    .map((c, i) => fn(c))
    .join('');

console.log(mapString('Javascript exercises', c => c.toUpperCase()));