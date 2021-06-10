function divide(a,b){
    let arr = (a/b).toString().split('.');
    if(arr[1].length >= 16){
        arr[1] = Math.floor(arr[1]/10000000000000) +1;
    }
    return arr.join('.');
}
console.log(divide(10,3));
