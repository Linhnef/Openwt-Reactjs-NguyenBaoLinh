let get_ = (x) => x.length == 1 ? x : x.slice(1);
console.log(get_([1, 2, 3])); 
console.log(get_([1]));