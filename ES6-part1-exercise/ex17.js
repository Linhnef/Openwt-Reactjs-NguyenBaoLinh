let change = (arr,d) => {
    return arr.reduce((rs,val,i) => (rs[d[i] ? 0 : 1].push(val),rs),[[],[]])
}

console.log(change([1, 2, 3, 4], [true, true, false, true]));
console.log(change([1, 2, 3, 4], [true, true, true, true]));
console.log(change([1, 2, 3, 4], [false, false, false, false]));