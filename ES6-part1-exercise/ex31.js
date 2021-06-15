let sum = (x,d) => {
  return x.map(typeof d === 'function' ? d : val => val[d]).reduce((rs,val) => rs+val,0);
}

console.log(sum([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n));
console.log(sum([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], 'n')); 