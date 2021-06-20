const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));
console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n));
console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'));


const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);
console.log(maxN([1, 2, 3]));
console.log(maxN([1, 2, 3], 2));