let check = (arr,d = Boolean) => {
    return arr.every(d);
}  

console.log(check([4, 2, 3], x => x > 1)); 
console.log(check([4, 2, 3], x => x < 1));
console.log(check([1, 2, 3])); 