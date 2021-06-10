function rotate(a){
    let f = a[0];
    let e = a[a.length-1];
    a[0] = e;
    a[a.length-1] = f;
    return a;
}
console.log(rotate([1,2,3,4,5,6]));