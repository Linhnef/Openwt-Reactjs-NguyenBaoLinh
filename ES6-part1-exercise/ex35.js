const ran = (min, max, n = 1) => {
  return Array.from({length:n},() => Math.floor((Math.random() * max - min) + min));
}
console.log(ran(1, 20, 10));
console.log(ran(-10, 10, 5));
