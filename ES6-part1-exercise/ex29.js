//#Source https://bit.ly/2neWfJ2 
const safeI = num => {
    let mini = Math.min(num,Number.MAX_SAFE_INTEGER);
    let maxi = Math.max(mini,Number.MIN_SAFE_INTEGER);
    let safeInt = Math.round(maxi);
    return safeInt;
}

console.log(safeI('5.2'));
console.log(safeI('5.52'));
console.log(safeI(Infinity));