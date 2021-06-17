let convertArray = (x) => {
    return Array.isArray(x) ? x : [x];
}

console.log(convertArray('w3r')); 
console.log(convertArray([100]));