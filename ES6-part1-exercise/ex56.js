let check = (arr) => {
    return arr.every(x => x == arr[0]);
}

console.log(check([1, 2, 3, 4, 5, 6]));
console.log(check([12, 12, 12, 12]));