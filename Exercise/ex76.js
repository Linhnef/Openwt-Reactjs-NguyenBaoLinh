function createNewArr(a){
    if(a.length<1) return false;
    let arr = [];
    arr[0] = a[0];
    arr[1] = a[a.length-1];
    return arr;
}
console.log(createNewArr([1,2,3,4,5,6,7]));