let create = (a,b) => a.reduce((rs,val) => rs.concat(b.map(x => [x,val])),[]);

console.log(create([1, 2], ['a', 'b']));
console.log(create([1, 2], [1, 2]));
console.log(create(['a', 'b'], ['a', 'b']));