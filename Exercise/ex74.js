function maxArr(a){
    let max = a[0];
    a.forEach(element => {
        if(element > max) max = element;
    });
    a[0] = max;
    a[1] = max;
    a[2] = max;
    return a;

}
console.log(maxArr([1,2,3]));